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

import { call, put, take, select } from 'redux-saga/effects'
import HistoryActions, { HistoryTypes } from '../Redux/HistoryRedux'
import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'

export function * getHistory (api, action) {
  const { data } = action
  const response = yield call(api.getHistory, data)

  if (response.ok) {
    yield put(HistoryActions.historySuccess(response.data))
  } else {
    yield put(HistoryActions.historyFailure())
  }
}


export function * watchHistory (api, action) {
  yield take(StartupTypes.STARTUP)
  const token = yield select((state) => state.login.token)
  if (!!token) {
    yield put(HistoryActions.historyRequest({token, page: 1}))
  } else {
    while(true) {
      const { payload } = yield take(LoginTypes.LOGIN_SUCCESS)
      yield put(HistoryActions.historyRequest({token: payload.token, page: 1}))
    }
  }
}
