import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/BalanceRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.balanceRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.balanceSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.balanceFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
