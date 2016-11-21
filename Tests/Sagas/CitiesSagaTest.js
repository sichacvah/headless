/* ***********************************************************
* Wiring Instructions
* To make this test work, you'll need to:
*  - Add a Fixture named getCities to the
*    ./App/Services/FixtureApi file. You can just keep adding
*    functions to that file.
*************************************************************/

import test from 'ava'
import FixtureAPI from '../../App/Services/FixtureApi'
import { call, put } from 'redux-saga/effects'
import { getCities } from '../../App/Sagas/CitiesSaga'
import CitiesActions from '../../App/Redux/CitiesRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', t => {
  const step = stepper(getCities(FixtureAPI, {data: 'taco'}))
  // first yield is the API
  t.deepEqual(step(), call(FixtureAPI.getCities, 'taco'))
})

test('success path', t => {
  const response = FixtureAPI.getCities('taco')
  const step = stepper(getCities(FixtureAPI, {data: 'taco'}))
  // Step 1: hit the api
  step()
  // Second step successful return and data!
  t.deepEqual(step(response), put(CitiesActions.citiesSuccess(21)))
})

test('failure path', t => {
  const response = {ok: false}
  const step = stepper(getCities(FixtureAPI, {data: 'taco'}))
  // Step 1: hit the api
  step()
  // Second step failed response
  t.deepEqual(step(response), put(CitiesActions.citiesFailure()))
})
