import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class History extends React.Component{
  render() {
    return (
      <div>
        <div>History!</div>
        <div>You bought some aapl and some fb</div>
        <div>{this.props.data.transactions.buy[0].symbol}</div>
      </div>
    )}
  }
