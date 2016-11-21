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
    subTitle: {
      color: Colors.underLabel,
      fontSize: Fonts.size.small,
      paddingLeft: Metrics.baseMargin,
      marginTop: -5
    },
    titleContainer: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      // selfAlign: 'center',
      // backgroundColor: '#ff0000',
    },
    textInputInline: {
      fontSize: 15,
      flex: 1,
      height: 40,// @todo should be changed if underlined
      marginTop: 2,
      textAlign: 'right',
      color: Colors.label,
      marginRight: Metrics.baseMargin
    },
    textInputTitleInline: {
      width: 150,
      fontSize: 15,
      color: Colors.label,
      paddingLeft: Metrics.baseMargin,
    },
    textInputTitle: {
      fontSize: 13,
      color: Colors.label,
      paddingLeft: Metrics.baseMargin,
      flex: 1
    },
    textInput: {
      fontSize: 15,
      flex: 1,
      height: 40,
      marginLeft: 40,
    },
})
