// @flow

import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  navButtonLeft: {
    marginLeft: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium,
    paddingTop: -5,
    paddingLeft: -5

  },
  navButtonRight: {
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -2,

  }
})
