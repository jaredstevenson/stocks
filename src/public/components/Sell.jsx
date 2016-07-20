import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Sell extends React.Component{
  render(){
    return  (
      <div>
        <p>Stock Symbol: <input
          type="text"
          value={this.props.state.views.priceCheck.symbol}
          onChange={this.props.handlePriceChange}
        />${this.props.findStockPriceInMarket(this.props.state.views.priceCheck.symbol)}</p>
      <p><button onClick={()=>this.props.getStockPrice(this.props.state.views.priceCheck.symbol)}>Check Price</button></p>
        <p>Quantity of Shares: <input
          type="number"
          value={this.props.state.views.sellField.numberShares}
          onChange={this.props.handleSellSharesChange}
        ></input></p>
      <p><button onClick={()=>this.props.handleSellButton()} >Sell</button></p>
      </div>
    )
  }
}
