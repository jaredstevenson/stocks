import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { find } from 'lodash';


export class Buy extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {symbol: '',
      price: null};

  }

  render(){
    return (
      <div>
        <p>Stock Symbol: <input
          type="text"
          symbol={this.state.symbol}
          onChange={this.handleChange}
        />${this.findStock(this.state.symbol)}</p>
        <p><button onClick={()=>this.handlePriceButton(this.state.symbol)}>Check Price</button></p>
        <p>Quantity of Shares: <input></input></p>
        <p><button>Purchase</button></p>
      </div>
    )
  }

  handleBuyButton(){

  }
  handlePriceButton(symbol){
    this.props.getStockPrice(symbol);

  }
  handleChange(event) {
    this.setState({symbol: event.target.value})
  }
  findStock(stockSymbol){
    var stock = find(this.props.state.marketPrices, {symbol: stockSymbol});
    if (!stock) return 0;
    return stock.price;
  }
}
