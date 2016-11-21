import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/SignupRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.signupRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.signupSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.signupFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
