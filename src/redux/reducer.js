import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {reducer as form} from 'redux-form'
import history from '../history'

import currencyReducer, {moduleName as currencyModule} from '../ducks/currency'

export default combineReducers({
    form,
    router: connectRouter(history),
    [currencyModule]: currencyReducer,
})