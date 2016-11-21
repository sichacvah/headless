// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const startup = (state: Object) => state.merge({ started: true })

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({started: false});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup,
})

/* -------------- Selectors --------------------- */

export const started = (startupState: Object) => startupState.started
