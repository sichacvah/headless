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
import AccountActions from '../Redux/AccountRedux'
import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'

export function * getAccount (api, token) {
  yield put(AccountActions.accountRequest())
  // make the call to the api
  const response = yield call(api.getAccount, token)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(AccountActions.accountSuccess(response.data))
  } else {
    yield put(AccountActions.accountFailure(response))
  }
}


export function * watchAccount (api, action) {
  yield take(StartupTypes.STARTUP)
  const token = yield select((state) => state.login.token)
  if (!!token) {
    yield call(getAccount, api, token)
  } else {
    while(true) {
      const { payload } = yield take(LoginTypes.LOGIN_SUCCESS)
      yield call(getAccount, api, payload.token)
    }
  }
}


export function * watchAccountUpdate (api, action) {
  const token = yield select((state) => state.login.token)
  const { data } = action
  const response = yield call(api.updateAccount, {account: data, token})

  if (response.ok) {
    yield put(AccountActions.accountSuccess(data))
  } else {
    yield put(AccountActions.accountFailure(response))
  }
}
