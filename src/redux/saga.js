import {all} from 'redux-saga/effects'
import {saga as currencySaga} from '../ducks/currency'

export default function* rootSaga() {
  yield all([
    currencySaga()
  ])
}