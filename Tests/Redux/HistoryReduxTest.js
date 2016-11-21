import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/HistoryRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.historyRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.historySuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.historyFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
