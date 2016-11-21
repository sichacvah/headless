// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
      paddingTop: Metrics.navBarHeight + 25,
      backgroundColor: '#f5f5f5',
      flex: 1
  },
})
