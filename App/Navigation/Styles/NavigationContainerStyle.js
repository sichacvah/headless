// @flow

import {Colors, Fonts} from '../../Themes/'
import {Platform} from 'react-native';

export default {
  container: {
    flex: 1,
  },
  barStyle: {
  },
  navBar: {
    backgroundColor: Colors.snow,
    borderBottomColor: Colors.spacer,
    borderBottomWidth: 1,
    paddingTop: 24,
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 54 + 24,
      },
    }),
  },
  title: {
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.black,
    // fontWeight: 'bold',
    fontSize: Fonts.size.regular,
  },
  leftButton: {
    tintColor: Colors.black
  },
  rightButton: {
    color: Colors.black
  }
}
