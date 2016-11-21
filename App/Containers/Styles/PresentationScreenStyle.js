// @flow

import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin
  },
  mainContainer: {
    height: undefined,
    paddingTop: Metrics.navBarHeight + 25,
    width: undefined,
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  card: {
    backgroundColor: Colors.snow,
    borderRadius: 5,
    marginVertical: 20
  },
  cardHeader: {
    backgroundColor: Colors.fire,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  balanceItem: {
    flex: 1,
    alignItems: 'center',

  },
  balanceLabel: {
    color: Colors.snow,
    textAlign: 'center'
  },
  balanceValue: {
    color: Colors.snow,
    fontSize: Fonts.size.h4,
    fontWeight: 'bold'
  },
  cardBody: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.doubleBaseMargin,
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  number: {
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  numberWrapper: {
    paddingBottom: Metrics.doubleBaseMargin
  },
  barcode: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
    flex: 1,
    marginBottom: Metrics.baseMargin + 17
  }
})
