// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Metrics.baseMargin,
    justifyContent: 'center'
  },
  row: {
    paddingTop: Metrics.statusBarHeight + Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    paddingLeft: Metrics.baseMargin,
    flexDirection: 'row',
    backgroundColor: Colors.menuHead,
    alignItems: 'center'
  },
  name: {
    color: Colors.snow,
    fontSize: Fonts.size.regular
  },
  image: {
    height: 40,
    width: 40,
    marginRight: Metrics.baseMargin
  }
})
