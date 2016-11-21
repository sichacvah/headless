// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    height:  Metrics.doubleBaseMargin,
    justifyContent: 'center',
    margin: Metrics.baseMargin,
    marginLeft: Metrics.doubleBaseMargin
  },
  label: {
    color: Colors.label,
    fontSize: 15
  }
})
