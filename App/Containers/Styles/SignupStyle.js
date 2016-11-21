// @flow

import { StyleSheet } from 'react-native'
import { Fonts, ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.navBarHeight + 25,
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  description: {
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  descriptionText: {
    color: Colors.black,
    fontSize: Fonts.regular
  },
  descriptionLink: {
    color: Colors.black,
    fontSize: Fonts.regular,
    textDecorationLine: 'underline'
  },
  buttonWrapper: {
    paddingHorizontal: Metrics.doubleBaseMargin
  }
})
