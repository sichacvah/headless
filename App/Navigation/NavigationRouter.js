// @flow

import React, { Component } from 'react'
import { Scene, Router, Switch } from 'react-native-router-flux'
import { connect } from 'react-redux';
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Components/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import Account from '../Containers/Account'
import LoginScreen from '../Containers/LoginScreen'
import DropPassword from '../Containers/DropPassword'
import Signup from '../Containers/Signup'
import Balance from '../Containers/Balance'
import History from '../Containers/History'
import Promos from '../Containers/Promos'
import Shops from '../Containers/Shops'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    const component = connect(state => ({
      isLoggedIn: !!state.login.token,
      started:  !!state.startup.started
    }))((props) => {
      if (!props.started) {
        return null
      }
      return <Switch {...props} />
    });
    function selector(props) {
      return props.isLoggedIn ? 'base' : 'login'
    }

    return (
      <Router>
        <Scene
          tabs
          initial
          key='root'
          unmountScenes
          titleStyle={Styles.title}
          component={component}
          selector={selector}>
          <Scene titleStyle={Styles.title} key='base'>
            <Scene key='drawer'
              titleStyle={Styles.title}
              leftButtonIconStyle={Styles.leftButton}
              rightButtonTextStyle={Styles.rightButton}
              component={NavigationDrawer} open={false}>
              <Scene
                navigationBarStyle={Styles.navBar}
                titleStyle={Styles.title}
                key='drawerChildrenWrapper' >
                <Scene
                  key='presentationScreen'
                  component={PresentationScreen}
                  title='Моя карта'
                  renderRightButton={NavItems.cartButton}
                  renderLeftButton={NavItems.hamburgerButton}  />
                <Scene
                  key='account'
                  component={Account}
                  title='Профиль'
                  renderLeftButton={NavItems.hamburgerButton} />
                <Scene
                  key='balance'
                  component={Balance}
                  title='Баланс'
                  renderLeftButton={NavItems.hamburgerButton} />
                <Scene
                  key='promos'
                  component={Promos}
                  title='Акции и конкурсы'
                  renderLeftButton={NavItems.hamburgerButton} />
                <Scene
                  key='shops'
                  component={Shops}
                  renderLeftButton={NavItems.hamburgerButton}  />
              </Scene>
            </Scene>
            <Scene
              key="history"
              component={History}
              titleStyle={Styles.title}
              panHandlers={null}
              navigationBarStyle={Styles.navBar}
              leftButtonIconStyle={Styles.leftButton}
              title='История операций' />
          </Scene>
          <Scene
            initial
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
            key='login'>
              <Scene key='loginForm' component={LoginScreen}  hideNavBar />
              <Scene key='dropPassword' component={DropPassword} title='Восстановление пароля' hideNavBar={false} />
              <Scene key='signupForm' component={Signup} title='Регистрация' hideNavBar={false}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
