// @flow

import React, { Component } from 'react'
import { ScrollView,  BackAndroid, View } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux'
import { connect } from 'react-redux'
import DrawerHeader from '../Components/DrawerHeader'
import Communications from 'react-native-communications'

const CATALOG_URL = 'http://www.championnet.ru/t/catalog'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.drawer && this.props.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }


  toggleDrawer () {
    this.props.drawer.closeDrawer()
  }

  handlePressMain = () => {
    this.toggleDrawer()
    NavigationActions.presentationScreen({type: ActionConst.RESET})
  }

  handlePressBalance = () => {
    this.toggleDrawer()
    NavigationActions.balance({type: ActionConst.RESET})
  }


  handlePressAccount = () => {
    this.toggleDrawer()
    NavigationActions.account({type: ActionConst.RESET})
  }

  handlePressPromos = () => {
    this.toggleDrawer()
    NavigationActions.promos({type: ActionConst.RESET})
  }

  handlePressShops = () => {
    this.toggleDrawer()
    NavigationActions.shops({type: ActionConst.RESET})
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerHeader text={this.props.name} />
        <View style={styles.content}>
          <DrawerButton text='Моя карта' onPress={this.handlePressMain} />
          <DrawerButton text='Баланс' onPress={this.handlePressBalance} />
          <DrawerButton text='Каталог' onPress={() => Communications.web(CATALOG_URL)} />
          <DrawerButton text='Акции, конкурсы' onPress={this.handlePressPromos} />
          <DrawerButton text='Магазины' onPress={this.handlePressShops} />
          <DrawerButton text='Настройки' onPress={this.handlePressAccount} />
        </View>
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}


const mapStateToProps = (state) => {
  return {
    name: (state.account.payload && state.account.payload.name ? state.account.payload.name : 'Аноним')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
