// @flow

import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles/DrawerButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.add('Drawer Button', () =>
  <DrawerButton
    text='Example left drawer button'
    onPress={() => window.alert('Your drawers are showing')}
  />
)

type DrawerButtonProps = {
  text: string,
  onPress: () => void
}

class DrawerButton extends Component {
  props: DrawerButtonProps

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
