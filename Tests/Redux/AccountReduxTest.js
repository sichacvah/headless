import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/AccountRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.accountRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.accountSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.accountFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
