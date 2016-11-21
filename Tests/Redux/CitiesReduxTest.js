import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CitiesRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.citiesRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.citiesSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.citiesFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
