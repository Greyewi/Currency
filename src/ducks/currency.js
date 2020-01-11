import {appName} from '../config'
import {Record, List} from 'immutable'
import {createSelector} from 'reselect'
import {all, take, put, select} from 'redux-saga/effects'

/**
 * Constants
 * */

export const moduleName = 'currency'
const prefix = `${appName}/${moduleName}`

export const INIT_CURRENCY_LIST_REQUEST = `${prefix}/INIT_CURRENCY_LIST_REQUEST`
export const INIT_CURRENCY_LIST_SUCCESS = `${prefix}/INIT_CURRENCY_LIST_SUCCESS`

export const FETCH_CURRENCY_REQUEST = `${prefix}/FETCH_CURRENCY_REQUEST`
export const FETCH_CURRENCY_SUCCESS = `${prefix}/FETCH_CURRENCY_SUCCESS`

export const ADD_CURRENCY_TO_LIST_REQUEST = `${prefix}/ADD_CURRENCY_TO_LIST_REQUEST`
export const ADD_CURRENCY_TO_LIST_SUCCESS = `${prefix}/ADD_CURRENCY_TO_LIST_SUCCESS`

export const LOADING_DATA_REQUEST = `${prefix}/LOADING_DATA_REQUEST`
export const LOADING_DATA_SUCCESS = `${prefix}/LOADING_DATA_SUCCESS`

/**
 * Reducer
 * */

export const ReducerRecord = Record({
  currencies: [],
  isLoading: false
})

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload} = action
  
  switch (type) {
    case INIT_CURRENCY_LIST_SUCCESS:
      return state.set('currencies', payload)
    case FETCH_CURRENCY_SUCCESS:
      return state.set('currencies', payload)
    default:
      return state
  }
}

/* *
 * Selectors
 * */

export const stateSelector = state => state[moduleName]
export const currencyListSelector = createSelector(stateSelector, state => state.currencies)

/* *
 * Action Creators
 * */

export function initCurrency() {
  return {
    type: INIT_CURRENCY_LIST_REQUEST
  }
}

/* *
 * Sagas
 * */

export const initCurrencySaga = function* () {
  while (true) {
    yield take(INIT_CURRENCY_LIST_REQUEST)
    
    //...
  }
}

export const saga = function* () {
  yield all([
    initCurrencySaga(),
  ])
}