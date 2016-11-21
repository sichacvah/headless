import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/BarcodeRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.barcodeRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.barcodeSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.barcodeFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
