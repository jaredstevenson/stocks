import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { find } from 'lodash';
import { priceCheck } from '../reducers/views/priceCheck.js';
//
//I changed how the stock symbol is inputed. I added it to the redux and now it doesn't work.
//figure out how to get it working with my new reducer
//
export class Price extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }


  render(){
    return (
      <div>
        <p>Stock Symbol: <input
          type="text"
          value={this.props.state.views.priceCheck.symbol}
          onChange={this.handleChange}
        />${this.findStock(this.props.state.views.priceCheck.symbol)}</p>
      <p><button onClick={()=>this.handlePriceButton(this.props.state.views.priceCheck.symbol)}>Check Price</button></p>
      </div>
    )
  }

  handleChange(event) {
    console.log("this.props.state.views.priceCheck.symbol", this.props.state.views.priceCheck.symbol);

     this.props.dispatch(priceCheck(event.target.value));

  }
  handlePriceButton(symbol){
    this.props.getStockPrice(symbol);

  }
  findStock(stockSymbol){
    var stock = find(this.props.state.marketPrices, {symbol: stockSymbol});
    if (!stock) return 0;
    return stock.price;
  }

}
