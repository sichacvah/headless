// @flow

import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  text: {
    ...Fonts.style.h5,
    color: Colors.snow,
    marginVertical: Metrics.baseMargin
  },
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.spacer
  }
}
