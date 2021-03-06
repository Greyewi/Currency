import React, {useEffect} from 'react'
import './App.scss'
import "antd/dist/antd.css"
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { Spin } from 'antd'

import {Header} from './components/Header'
import Main from './components/Main'
import SavesCurrencies from './components/SavesCurrencies'

import {
  activeCurrenciesSelector,
  saveCurrenciesSelector,
  removeActiveCurrency,
  currencyListSelector,
  isLoadingSelector,
  saveActiveCurrency,
  initCurrencyList,
  getCurrencyData,
} from './ducks/currency'

const App = ({initCurrencyList, isLoading, ...props}) => {

  useEffect(() => {
    initCurrencyList()
  }, [])
    
  return (
    <div className="App">
      <Header {...props}/>
      {isLoading ? <Spin size="large" /> : <Switch>
        <Route path="/list" render={() => <SavesCurrencies {...props}/>}/>
        <Route path="/" render={() => <Main {...props}/>}/>
      </Switch>}
    </div>
  )
}

export default connect(state => ({
  activeCurrencies: activeCurrenciesSelector(state),
  saveCurrencies: saveCurrenciesSelector(state),
  currencyList: currencyListSelector(state),
  isLoading: isLoadingSelector(state),
}), {
  removeActiveCurrency,
  saveActiveCurrency,
  initCurrencyList,
  getCurrencyData
})(App)