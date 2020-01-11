import React from 'react'
import './App.css'
import {connect} from 'react-redux'

import {
  currencyListSelector,
  initCurrency
} from '../ducks/currency'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Currencies list
        </p>
      </header>
    </div>
  )
}

export default connect(state => ({
  currencyList: currencyListSelector(state),
}), {
  initCurrency
})(App)
