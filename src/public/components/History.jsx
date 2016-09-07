import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class History extends React.Component{
  render() {
    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Action Type</th>
                <th>Symbol</th>
                <th>Quantity of Shares</th>
                <th>Price</th>
                <th>Transaction Time</th>
                <th>Transaction Date</th>

              </tr>
            </thead>
            <tbody>
              {this.props.transactions.map((transaction)=>{
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.actionType}</td>
                    <td>{transaction.symbol}</td>
                    <td>{transaction.numShares}</td>
                    <td>{transaction.price}</td>
                    <td>{transaction.time}</td>
                    <td>{transaction.date}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
      </div>
    )}
  }
