// @flow

import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/TextInputWidgetStyle'


export default class TextInputWidget extends React.Component {
  renderTitle() {
    if (this.props.title) {
      return (
        <Text
          numberOfLines={1}
          style={styles.textInputTitleInline}>
          {this.props.title}
        </Text>
      )
    }
    return null
  }

  renderSubtitle() {
    if (this.props.subTitle) {
      return (
        <Text
          numberOfLines={1}
          style={styles.subTitle}>
          {this.props.subTitle}
        </Text>
      )
    }
    return null
  }

  focus() {
    this.refs.input.focus();
  }

  render () {
    return (
      <View style={styles.rowContainer}>
        <View style={[styles.row, !!this.props.last && { borderBottomWidth: 0 }, !!this.props.subTitle && { height: 60 }]}>
          <View>
            {this.renderTitle()}
            {this.renderSubtitle()}
          </View>
          <TextInput
            ref="input"
            underlineColorAndroid='transparent'
            style={styles.textInputInline}
            {...this.props} />
        </View>
      </View>
    )
  }
}

// // Prop type warnings
// TextInputWidget.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// TextInputWidget.defaultProps = {
//   someSetting: false
// }
