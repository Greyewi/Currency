import React from 'react'

export const CurrenciesNameList = (props) => {
  const {currencyList, getCurrencyData} = props
  
  return (
    <main>
      {currencyList && currencyList.list && currencyList.list.map((item, key) =>
        <div className="item" onClick={() => getCurrencyData(item)} key={key}>{item}</div>)
      }
    </main>
  )
}