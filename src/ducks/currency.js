import {appName} from '../config'
import {Record} from 'immutable'
import {createSelector} from 'reselect'
import {all, take, put, select} from 'redux-saga/effects'
import axios from 'axios'

/**
 * Constants
 * */

export const moduleName = 'currency'
const prefix = `${appName}/${moduleName}`

export const INIT_CURRENCY_TITLE_LIST_REQUEST = `${prefix}/INIT_CURRENCY_TITLE_LIST_REQUEST`
export const INIT_CURRENCY_TITLE_LIST_SUCCESS = `${prefix}/INIT_CURRENCY_TITLE_LIST_SUCCESS`

export const FETCH_NEW_CURRENCY_LIST_REQUEST = `${prefix}/FETCH_NEW_CURRENCY_LIST_REQUEST`
export const FETCH_NEW_CURRENCY_LIST_SUCCESS = `${prefix}/FETCH_NEW_CURRENCY_LIST_SUCCESS`

export const SAVE_ACTIVE_CURRENCY_REQUEST = `${prefix}/SAVE_ACTIVE_CURRENCY_REQUEST`
export const SAVE_ACTIVE_CURRENCY_SUCCESS = `${prefix}/SAVE_ACTIVE_CURRENCY_SUCCESS`

export const REMOVE_SAVED_CURRENCY_REQUEST = `${prefix}/REMOVE_SAVED_CURRENCY_REQUEST`
export const REMOVE_SAVED_CURRENCY_SUCCESS = `${prefix}/REMOVE_SAVED_CURRENCY_SUCCESS`

export const LOADING_DATA_SUCCESS = `${prefix}/LOADING_DATA_SUCCESS`

/**
 * Reducer
 * */

export const ReducerRecord = Record({
  currencyList: null,
  activeCurrencies: null,
  saveCurrencies: [],
  isLoading: false
})

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload} = action
  
  switch (type) {
    case INIT_CURRENCY_TITLE_LIST_SUCCESS:
      return state.set('currencyList', payload)
    case FETCH_NEW_CURRENCY_LIST_SUCCESS:
      return state.set('activeCurrencies', payload)
    case SAVE_ACTIVE_CURRENCY_SUCCESS:
      return state.set('saveCurrencies', payload)
    case LOADING_DATA_SUCCESS:
      return state.set('isLoading', payload)
    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName]
export const currencyListSelector = createSelector(stateSelector, state => state.currencyList)
export const isLoadingSelector = createSelector(stateSelector, state => state.isLoading)
export const activeCurrenciesSelector = createSelector(stateSelector, state => state.activeCurrencies)
export const saveCurrenciesSelector = createSelector(stateSelector, state => state.saveCurrencies)

/**
 * Action Creators
 * */

export function initCurrencyList() {
  return {
    type: INIT_CURRENCY_TITLE_LIST_REQUEST
  }
}

export function getCurrencyData(name) {
  return {
    type: FETCH_NEW_CURRENCY_LIST_REQUEST,
    payload: name
  }
}

export function saveActiveCurrency() {
  return {
    type: SAVE_ACTIVE_CURRENCY_REQUEST
  }
}

export function removeActiveCurrency(currency) {
  return {
    type: REMOVE_SAVED_CURRENCY_REQUEST,
    payload: currency
  }
}

/**
 * Sagas
 * */

export const removeActiveCurrencySaga = function* () {
  while (true) {
    const {payload} = yield take(REMOVE_SAVED_CURRENCY_REQUEST)
    
    yield put({
      type: LOADING_DATA_SUCCESS,
      payload: true
    })
    
    localStorage.removeItem(payload)
    
    yield put({
      type: REMOVE_SAVED_CURRENCY_REQUEST,
      payload: localStorage
    })
    
    yield put({
      type: LOADING_DATA_SUCCESS,
      payload: false
    })
  }
}

export const saveActiveCurrencySaga = function* () {
  while (true) {
    yield take(SAVE_ACTIVE_CURRENCY_REQUEST)
    
    yield put({
      type: LOADING_DATA_SUCCESS,
      payload: true
    })
    
    const activeCurrencies = yield select(activeCurrenciesSelector)
    localStorage.setItem(activeCurrencies.base, JSON.stringify(activeCurrencies))
    
    yield put({
      type: SAVE_ACTIVE_CURRENCY_SUCCESS,
      payload: localStorage
    })
    
    yield put({
      type: LOADING_DATA_SUCCESS,
      payload: false
    })
  }
}

export const getCurrencyDataSaga = function* () {
  while (true) {
    const {payload} = yield take(FETCH_NEW_CURRENCY_LIST_REQUEST)
    const url = `https://api.exchangeratesapi.io/latest?base=${payload}`
    
    yield put({
      type: LOADING_DATA_SUCCESS,
      payload: true
    })
    
    try {
      const {data} = yield axios.get(url, JSON.stringify({headers: {'Content-Type': 'text/html'}}))
      
      yield put({
        type: FETCH_NEW_CURRENCY_LIST_SUCCESS,
        payload: data
      })
    } catch (err) {
      console.log(err)
    } finally {
      yield put({
        type: LOADING_DATA_SUCCESS,
        payload: false
      })
    }
    
  }
}

export const initCurrencyListSaga = function* () {
  while (true) {
    yield take(INIT_CURRENCY_TITLE_LIST_REQUEST)
    const url = `https://api.exchangeratesapi.io/latest`
  
    yield put({
      type: LOADING_DATA_SUCCESS,
      payload: true
    })
    
    try {
      const {data} = yield axios.get(url, JSON.stringify({headers: {'Content-Type': 'text/html'}}))
      const listCurrencies = Object.keys(data.rates)
      
      yield put({
        type: INIT_CURRENCY_TITLE_LIST_SUCCESS,
        payload: {list: listCurrencies, date: data.date}
      })
    } catch (err) {
      console.log(err)
    } finally {
      
      yield put({
        type: SAVE_ACTIVE_CURRENCY_SUCCESS,
        payload: localStorage
      })
  
      yield put({
        type: LOADING_DATA_SUCCESS,
        payload: false
      })
    }
    
  }
}

export const saga = function* () {
  yield all([
    removeActiveCurrencySaga(),
    saveActiveCurrencySaga(),
    initCurrencyListSaga(),
    getCurrencyDataSaga(),
  ])
}