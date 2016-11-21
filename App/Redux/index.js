// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    login: require('./LoginRedux').reducer,
    startup: require('./StartupRedux').reducer,
    signup: require('./SignupRedux').reducer,
    barcode: require('./BarcodeRedux').reducer,
    balance: require('./BalanceRedux').reducer,
    account: require('./AccountRedux').reducer,
    history: require('./HistoryRedux').reducer,
    promos: require('./PromosRedux').reducer,
    cities: require('./CitiesRedux').reducer,
    shops: require('./ShopsRedux').reducer,
    notification: require('./NotificationsRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
