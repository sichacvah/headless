// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Metrics, Colors } from '../Themes'
import styles from './Styles/SelectWidgetStyle'
import DialogAndroid from 'react-native-dialogs'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SelectWidget extends React.Component {
  renderTitle() {
    if (this.props.title) {
      return (
        <Text
          numberOfLines={1}
          style={styles.textInputTitleInline}>
          {this.props.title}
        </Text>
      );
    }
    return '';
  }

  showDialog() {
    const dialog = new DialogAndroid();
    const options = { items: this.props.values, itemsCallback: this.props.itemsCallback };
    dialog.set(options);
    dialog.show();
  }

  render () {
    return (
      <TouchableOpacity onPress={this.showDialog.bind(this)}>
        <View style={styles.rowContainer}>
          <View style={[styles.row, !!this.props.last && { borderBottomWidth: 0 }]}>
            {this.renderTitle()}
            <Text
              ref="select"
              style={styles.textInputInline}
              {...this.props}>
              {this.props.value}
            </Text>
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

// // Prop type warnings
// SelectWidget.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// SelectWidget.defaultProps = {
//   someSetting: false
// }
