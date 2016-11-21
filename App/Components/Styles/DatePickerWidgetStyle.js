// @flow

import { StyleSheet, PixelRatio } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts,  } from '../../Themes/'

export default StyleSheet.create({
    spacer: {
      width: Metrics.baseMargin,
    },
    rowContainer: {
      backgroundColor: Colors.snow,
    },
    row: {
      marginLeft: Metrics.baseMargin,
      borderBottomWidth: 1,
      borderColor: Colors.spacer,
      flexDirection: 'row',
      height: 44,
      alignItems: 'center',
    },
    titleContainer: {
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      // selfAlign: 'center',
      // backgroundColor: '#ff0000',
    },
    inputInline: {
      fontSize: 15,
      flex: 1,
      marginTop: 2,
      textAlign: 'right',
      color: Colors.label,
      // marginRight: Metrics.baseMargin
    },
    inputTitleInline: {
      width: 110,
      fontSize: 15,
      color: Colors.label,
      paddingLeft: Metrics.baseMargin,
    },
    inputTitle: {
      fontSize: 13,
      color: Colors.label,
      paddingLeft: Metrics.baseMargin,
      flex: 1
    },
    input: {
      fontSize: 15,
      flex: 1,
      height: 40,
      marginLeft: 40,
    },
})
