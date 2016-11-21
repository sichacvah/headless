import { put, call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux'
import ErrorAlert from '../Services/ErrorAlert'

export function * login (api, action) {
  const { data } = action
  const response = yield call(api.login, data)
  if (response.ok && !response.data.error) {
    yield put(LoginActions.loginSuccess(response.data))
    yield call(() => api.getBarcode(response.data.token))

  } else {
    const alert = new ErrorAlert(response)
    yield call(alert.show)
    yield put(LoginActions.loginFailure())
  }
}
