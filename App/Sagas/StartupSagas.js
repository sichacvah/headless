import { put, select, call } from 'redux-saga/effects'
import { is } from 'ramda'
import CitiesActions from '../Redux/CitiesRedux'

// process STARTUP actions
export function * startup (api) {
  yield put(CitiesActions.citiesRequest())
  const token = yield select(state => state.login.token)
  if (!!token) {
    yield call(() => api.setToken(token))
  }

}
