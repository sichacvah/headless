import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/DropPasswordRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.dropPasswordRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.dropPasswordSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.dropPasswordFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
