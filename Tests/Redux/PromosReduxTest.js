import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/PromosRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.promosRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.promosSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.promosFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
