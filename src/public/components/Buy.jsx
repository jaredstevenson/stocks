import * as React from 'react';
import * as ReactDOM from 'react-dom';


export class Buy extends React.Component{
  constructor(props){
    super(props);
    // this.handlePriceChange = this.handlePriceChange.bind(this);
    // this.state = {symbol: '',
    //   price: null};

  }

  render(){
    return (
      <div>
        <p>Stock Symbol: <input
          type="text"
          value={this.props.state.views.priceCheck.symbol}
          onChange={this.props.handlePriceChange}
        />${this.props.findStockPriceInMarket(this.props.state.views.priceCheck.symbol)}</p>
      <p><button onClick={()=>this.handlePriceButton(this.props.state.views.priceCheck.symbol)}>Check Price</button></p>
        <p>Quantity of Shares: <input
          type="number"
          value={this.props.state.views.buyField.numberShares}
          onChange={this.props.handleBuySharesChange}
        ></input></p>
      <p><button onClick={()=>this.props.handleBuyButton(this.props.state.views.buyField.numberShares, this.props.state.views.priceCheck.symbol)} >Purchase</button></p>
      </div>
    )
  }




  handlePriceButton(symbol){
    this.props.getStockPrice(symbol);

  }
}
