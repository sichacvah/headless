// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FormWidgetStyle'

export default class FormWidget extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

// // Prop type warnings
// FormWidget.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// FormWidget.defaultProps = {
//   someSetting: false
// }
