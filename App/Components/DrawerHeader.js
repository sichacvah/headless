// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/DrawerHeaderStyle'
import { Images } from '../Themes'

export default class DrawerHeader extends React.Component {

  render () {
    return (
        <View style={styles.row}>
          <Image source={Images.userIcon} style={styles.image} />
          <Text style={styles.name}>{this.props.text}</Text>
        </View>
    )
  }
}

// // Prop type warnings
// DrawerHeader.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DrawerHeader.defaultProps = {
//   someSetting: false
// }
