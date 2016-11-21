// @flow

import React, { Component } from 'react'
import { View, StatusBar, ToastAndroid } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'

import NotificationsActions from '../Redux/NotificationsRedux'
import ReduxPersist from '../Config/ReduxPersist'
import FCM from 'react-native-fcm'
// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    FCM.getFCMToken().then(token => {
    });
    FCM.subscribeToTopic('/topics/test');
    this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
      console.log(token)
    });
    this.notificationUnsubscribe = FCM.on('notification', (n) => {
      this.props.addNotification(n)
      console.log(12222)
    })
  }

  componentWillUnmount() {
    this.refreshUnsubscribe()
    this.notificationUnsubscribe()
  }

  render () {

    return (
      <View style={styles.applicationView}>
        <StatusBar
          barStyle='dark-content'
          translucent={true}
          backgroundColor='rgba(0,0,0, 0.1)' />
        <NavigationRouter />
      </View>
    )
  }
}


const mapStateToDispatch = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  addNotification: (notification) => dispatch(NotificationsActions.addNotification(notification))
})

const mapStateToProps = (state) => ({
  notifications: state.notifiactions.payload
})

export default connect(null, mapStateToDispatch)(RootContainer)
