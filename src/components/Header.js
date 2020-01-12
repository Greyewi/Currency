import React from 'react'
import {PageHeader, Button} from 'antd'
import {Link} from 'react-router-dom'

export const Header = (props) => {
  const {activeCurrencies, saveCurrencies} = props
  
  return (
    <header className="App-header">
      {props.currencyList && <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={activeCurrencies ? activeCurrencies.base : "Currencies list"}
        subTitle={props.currencyList.date || activeCurrencies.date}
        extra={[
          activeCurrencies && <Button onClick={props.saveActiveCurrency} key="3">Save current currency</Button>,
          saveCurrencies.length > 0 && <Link to="/list" key="1">
            <Button type="primary">
              To Saves list
            </Button>
          </Link>,
        ]}
      >
      </PageHeader>}
    </header>
  )
}