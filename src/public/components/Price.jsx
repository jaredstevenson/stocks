import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { find } from 'lodash';
//

//
export class Price extends React.Component{
  constructor(props){
    super(props);

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
      </div>
    )
  }


  handlePriceButton(symbol){
    this.props.getStockPrice(symbol);

  }


}
