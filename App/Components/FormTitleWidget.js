// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FormTitleWidgetStyle'

export default class FormTitleWidget extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.value}</Text>
      </View>
    )
  }
}
