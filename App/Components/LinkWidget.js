// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/LinkWidgetStyle'
import { Metrics, Colors } from '../Themes'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class LinkWidget extends React.Component {
  renderTitle() {
    if (this.props.title) {
      return (
        <Text
          numberOfLines={1}
          style={styles.inputTitleInline}>
          {this.props.title}
        </Text>
      )
    }
    return null
  }


  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.rowContainer}>
          <View style={[styles.row, !!this.props.last && { borderBottomWidth: 0 }]}>
            {this.renderTitle()}
            <Icon name='chevron-right'
              size={Metrics.icons.medium}
              color={Colors.black}
                />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
