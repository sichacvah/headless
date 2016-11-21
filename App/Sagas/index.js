import { takeLatest } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { SignupTypes } from '../Redux/SignupRedux'
import { DropPasswordTypes } from '../Redux/DropPasswordRedux'
import { AccountTypes } from '../Redux/AccountRedux'
import { HistoryTypes } from '../Redux/HistoryRedux'
import { CitiesTypes } from '../Redux/CitiesRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { signup } from './SignupSaga'
import { dropPassword } from './DropPasswordSaga'
import { watchBarcode } from './BarcodeSaga'
import { watchBalance } from './BalanceSaga'
import { watchAccount, watchAccountUpdate } from './AccountSaga'
import { getHistory, watchHistory } from './HistorySaga'
import { watchPromos } from './PromosSaga'
import { getCities } from './CitiesSaga'
import { watchShops } from './ShopsSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(SignupTypes.SIGNUP_REQUEST, signup, api),
    takeLatest(DropPasswordTypes.DROP_PASSWORD_REQUEST, dropPassword, api),
    takeLatest(AccountTypes.ACCOUNT_UPDATE, watchAccountUpdate, api),
    takeLatest(HistoryTypes.HISTORY_REQUEST, getHistory, api),
    takeLatest(CitiesTypes.CITIES_REQUEST, getCities, api),
    fork(watchBarcode, api),
    fork(watchBalance, api),
    fork(watchAccount, api),
    fork(watchHistory, api),
    fork(watchPromos, api),
    fork(watchShops, api)
  ]
}
