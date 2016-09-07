import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { find } from 'lodash';

//this table displays the portfolio and all the holdings
export class Portfolio extends React.Component {
  render() {
    return (
      <div className="below-menu">
        Name: {this.props.name}     Username: {this.props.username}
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Last Price</th>
              <th>Total Gain/Loss</th>
              <th>Current Value</th>
              <th>Quantity of Shares</th>
              <th>Average Cost Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cash</td>
              <td>-----</td>
              <td>-----</td>
              <td>{this.props.cash.toFixed(2)}</td>
            </tr>
            {this.props.holdings.map((holding)=>{
              const stockPrice = find(this.props.marketPrices, (stockPrice)=>{
                return (stockPrice.symbol == holding.symbol)
              })
              const CurVal = holding.numShares * stockPrice.price
              const netGain = CurVal - (holding.numShares * holding.avgCostBasis)
              return (
                <tr key={holding.symbol}>
                  <td>{holding.symbol}</td>

                  <td>
                    ${stockPrice.price.toFixed(2)}

                  </td>
                  <td>
                    ${ netGain.toFixed(2)}

                  </td>
                  <td>
                    ${ CurVal.toFixed(2) }

                  </td>
                  <td>
                    {holding.numShares.toFixed(0)}

                  </td>
                  <td>
                    ${holding.avgCostBasis.toFixed(2)}

                  </td>

                </tr>

              )

            }
          )
          }
          <tr>
            <td>Total Value</td>
            <td>-----</td>
            <td>-----</td>
            <td>{(this.props.cash + portfolioTotalValue(this.props.holdings, this.props.marketPrices)).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

function portfolioTotalValue(holdings, marketPrices){
  let totalValue = 0;
  holdings.map((holding)=> {
    const stockPrice = find(marketPrices, (stockPrice)=>{
      return (stockPrice.symbol == holding.symbol)
    })
    totalValue += (holding.numShares * stockPrice.price);
  })
  return totalValue;
}
