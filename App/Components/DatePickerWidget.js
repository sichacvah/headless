// @flow

import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  DatePickerAndroid
} from 'react-native'
import styles from './Styles/DatePickerWidgetStyle'
import moment from 'moment'
import { Metrics, Colors } from '../Themes'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class DatePickerWidget extends React.Component {
  renderTitle() {
    if (this.props.title) {
      return (
        <Text
          numberOfLines={1}
          style={styles.inputTitleInline}>
          {this.props.title}
        </Text>
      );
    }
    return '';
  }

  showDialog() {
    const date = (this.props.value ? new Date(this.props.value) : new Date);
    DatePickerAndroid.open({
      date,
      minDate: this.props.minDate,
      maxDate: this.props.maxDate
    }).then(({action, year, month, day}) => {
      if (action !== DatePickerAndroid.dismissedAction && typeof this.props.selectDateCallback === 'function') {
        this.props.selectDateCallback((new Date(year, month, day)).getTime())
      }
    }).catch((e) => e)
  }

  render () {
    return (
      <TouchableOpacity onPress={this.showDialog.bind(this)}>
        <View style={styles.rowContainer}>
          <View style={[styles.row, !!this.props.last && { borderBottomWidth: 0 }]}>
            {this.renderTitle()}
            <Text
              ref="select"
              style={styles.inputInline}
              {...this.props}>
              {this.props.value ? moment(this.props.value).format('DD.MM.YY') : ''}
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
