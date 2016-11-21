// @flow

import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors, Metrics } from '../Themes'
import Communications from 'react-native-communications'

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

const SHOP_URL = 'http://www.championnet.ru/'

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.black}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Icon name='menu'
          size={Metrics.icons.medium}
          color={Colors.black}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  cartButton() {
    return (
      <TouchableOpacity onPress={() => Communications.web(SHOP_URL)}>
        <Icon name='shopping-cart'
          size={Metrics.icons.small}
          color={Colors.black}
          style={styles.navButtonRight}
        />
      </TouchableOpacity>
    )

  }

}
