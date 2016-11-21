import { Platform, ToastAndroid, Alert } from 'react-native'

const ANDROID = Platform.OS === 'android'


export default class ErrorAlert {
  constructor(response, cb) {
    if (response.data) {
      this.message = response.data.error
    } else {
      this.message = response.error
    }
    this.cb = cb
    this.show = this.show.bind(this)
  }

  show() {
    if (ANDROID) {
      ToastAndroid.show(this.message, ToastAndroid.LONG);
    } else {
      Alert.alert('Внимание!', this.message)
    }
    if (typeof this.cb === 'function') {
      this.cb()
    }
  }
}
