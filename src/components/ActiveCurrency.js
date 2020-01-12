import React from 'react'

export const ActiveCurrency = (props) => {
  const {activeCurrencies, getCurrencyData} = props
  const rates = Object.entries(activeCurrencies.rates).map(e => ({[e[0]]: e[1]}))
  
  return (
    <main>
      {rates && rates.map((item, key) =>
        <div
          className="item"
          onClick={getCurrencyData ? () => getCurrencyData(Object.keys(item)) : () => false}
          key={key}
        >
          {`${Object.keys(item)} - ${Object.values(item)}`}
        </div>
      )}
    </main>
  )
}