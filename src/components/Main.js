import React, {Component} from 'react'

import {CurrenciesNameList} from './CurrenciesNameList'
import {ActiveCurrency} from './ActiveCurrency'

class Main extends Component {
  
  render() {
    const {activeCurrencies, ...props} = this.props
    
    return activeCurrencies ? <ActiveCurrency activeCurrencies={activeCurrencies} {...props}/> :
          <CurrenciesNameList {...props}/>
    
  }
}

export default Main