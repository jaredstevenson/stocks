import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Buy extends React.Component{
  render(){
    return (
      <div>
        <p>Stock Symbol: <input></input></p>
        <p>Quantity of Shares: <input></input></p>
        <p><button>Purchase</button></p>
      </div>
    )
  }
}
