import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  notificationsRequest: ['data'],
  notificationsSuccess: ['payload'],
  notificationsFailure: null,
  addNotification: ['notification']
})

export const NotificationsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: [],
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: [] })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: [] })

export const addNotification = (state, {notification}) =>
  state.merge({ payload: state.payload.concat([notification]) })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NOTIFICATIONS_REQUEST]: request,
  [Types.NOTIFICATIONS_SUCCESS]: success,
  [Types.NOTIFICATIONS_FAILURE]: failure,
  [Types.ADD_NOTIFICATION]: addNotification,
})
