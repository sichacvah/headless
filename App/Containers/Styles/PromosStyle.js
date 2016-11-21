// @flow

import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'
const { width } = Dimensions.get('window')


export default StyleSheet.create({
  container: {
    paddingTop: Metrics.navBarHeight + 25,
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  itemImage: {
    width,
    flex: 1
  },
  item: {
    height: 200,
    marginBottom: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.spacer
  },
  titleWrapper: {
    height: 40,
    paddingLeft: Metrics.doubleBaseMargin ,
    backgroundColor: Colors.snow,
    justifyContent: 'center'
  }
})
