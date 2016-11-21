// @flow

import { StyleSheet, PixelRatio } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 80
  },
  content: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  form: {
    margin: Metrics.baseMargin,
  },
  row: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: 5,
    borderWidth: 1.5 / PixelRatio.get(),
    borderBottomWidth: 0,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center'
  },
  topRow: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopWidth: 0
  },
  bottomRow: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0
  },
  rowLabel: {
    color: Colors.snow
  },
  textInput: {
    height: 40,
    flex: 1,
    color: Colors.snow
  },
  textInputReadonly: {
    height: 40,
    color: Colors.snow
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonWrapper: {
    flex: 1,
    marginVertical: Metrics.baseMargin
  },
  linkWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    color: Colors.snow
  },
  description: {
    fontSize: Fonts.size.medium,
    color: Colors.snow
  },
  descriptionWrapper: {
    margin: Metrics.baseMargin
  },
  bottomButtonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: Colors.windowTint,
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.snow
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})
