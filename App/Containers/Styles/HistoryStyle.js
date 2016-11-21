// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.navBarHeight + 25,
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  tableLabel: {
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.doubleBaseMargin
  },
  rowWrapper: {
    backgroundColor: Colors.snow,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.doubleBaseMargin

  },
  row: {
    marginLeft: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderColor: Colors.spacer,
    flexDirection: 'row',
    height: 44,
    alignItems: 'center'
  },
  col: {
    flex: 1,

  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  firstCol: {
    flex: 0,
    width: 95,

  },
  label: {
    fontSize: Fonts.size.medium,
    color: Colors.label,

  },
  sum: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
  },
  neutral: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
  },
  positive: {
    fontSize: Fonts.size.regular,
    color: Colors.green,
  },
  negative: {
    fontSize: Fonts.size.regular,
    color: Colors.red,
  }

})
