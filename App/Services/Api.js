// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'http://pc.championnet.ru') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })
  //
  // api.addRequestTransform((request) => {
  //   request.params['APPID'] = '0e44183e8d1018fc92eb3307d885379c'
  // })

  if (__DEV__ && console.tron) {
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
    api.addMonitor(console.tron.apisauce)
  }

  const signup = (data) => api.post('mobile/sign_up', {
    user: {
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
    },
    account: {
      phone: data.phone
    }
  })

  const dropPassword = (email) => api.post('mobile/drop_password', {email})

  const getCity = (city) => api.get('weather', {q: city})

  const login = (data) => api.post('mobile/sign_in', data)

  const getBarcode = (token) => api.post('mobile/barcode', {token})

  const getBalance = (token) => api.post('mobile/balance', {token})

  const setToken = (token) => api.setHeader('Authorization', `Bearer ${token}`)

  const getAccount  = (token) => api.post('mobile/account/attributes', {token})

  const updateAccount = (data) => api.post('mobile/account_edit', data)

  const getHistory = (data) => api.post('mobile/history', data)

  const getPromos = (token) => api.post('mobile/promos/index', {token})

  const getCities = () => api.post('mobile/cities')

  const getShops = (token) => api.post('mobile/stores', {token})

  return {
    // a list of the API functions from step 2
    getCity,
    signup,
    dropPassword,
    login,
    getBarcode,
    getBalance,
    setToken,
    getAccount,
    updateAccount,
    getHistory,
    getPromos,
    getCities,
    getShops
  }
}

// let's return back our create method as the default.
export default {
  create
}
