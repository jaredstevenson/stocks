import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Sell extends React.Component{
  render(){
    return (
      <div>
        <p>Stock Symbol: <input></input></p>
        <p>Quantity of Shares: <input></input></p>
        <p><button>Sell</button></p>
      </div>
    )
  }
}
