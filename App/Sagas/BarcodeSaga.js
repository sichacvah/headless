/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, select, take } from 'redux-saga/effects'
import BarcodeActions from '../Redux/BarcodeRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { StartupTypes } from '../Redux/StartupRedux'

export function * getBarcode (api, token) {
  yield put(BarcodeActions.barcodeRequest())
  const response = yield call(api.getBarcode, token)
  if (response.ok) {
    yield put(BarcodeActions.barcodeSuccess(response))
  } else {
    yield put(BarcodeActions.barcodeFailure())
  }
}


export function * watchBarcode (api, action) {
  yield take(StartupTypes.STARTUP)
  const token = yield select((state) => state.login.token)
  if (!!token) {
    yield call(getBarcode, api, token)
  } else {
    while(true) {
      const { payload } = yield take(LoginTypes.LOGIN_SUCCESS)
      yield call(getBarcode, api, payload.token)
    }
  }
}
