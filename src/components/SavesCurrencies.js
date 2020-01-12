import React, {Component} from 'react'
import {ActiveCurrency} from './ActiveCurrency'
import {Collapse, Icon} from 'antd'

const {Panel} = Collapse

const genExtra = (onDelItem) => (
  <Icon
    type="delete"
    onClick={event => {
      event.stopPropagation()
      onDelItem()
    }}
  />
)

class SavesCurrencies extends Component {
  
  render() {
    const {saveCurrencies, removeActiveCurrency} = this.props
    const saves = Object.entries(saveCurrencies).map(e => ({[e[0]]: e[1]}))
    return (
      <main>
        {saves && saves.map((item, key) => {
          const currency = JSON.parse(item[Object.keys(item)])
          return (
            <div key={key}>
              <Collapse accordion>
                <Panel
                  header={currency.base + ' - ' + currency.date}
                  key="1"
                  extra={genExtra(() => removeActiveCurrency(currency.base))}
                >
                  <ActiveCurrency activeCurrencies={currency}/>
                </Panel>
              </Collapse>
            </div>
          )
        })}
      </main>
    )
  }
}

export default SavesCurrencies