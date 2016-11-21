import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/NotificationsRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.notificationsRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.notificationsSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.notificationsFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
