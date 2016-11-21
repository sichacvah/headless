import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/ShopsRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.shopsRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.shopsSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.shopsFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
