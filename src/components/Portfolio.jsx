import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { find } from 'lodash';

//this table displays the portfolio and all the holdings
export class Portfolio extends React.Component {
  render() {
    return (
      <div className="below-menu">
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
                    ${stockPrice.price}

                  </td>
                  <td>
                    ${ netGain}

                  </td>
                  <td>
                    ${ CurVal }

                  </td>
                  <td>
                    {holding.numShares}

                  </td>
                  <td>
                    ${holding.avgCostBasis}

                  </td>
                  <td>

                  </td>
                </tr>

              )

            }
          )
          }
        </tbody>
      </table>
      Prices last updated {this.props.marketPrices[0].updatedAt.toString()}
      </div>
    )
  }
}
