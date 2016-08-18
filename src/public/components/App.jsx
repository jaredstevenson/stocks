import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { find } from 'lodash';

import { Portfolio } from "./Portfolio.jsx"
import { Menu } from "./Menu.jsx"
import { Login } from "./Login.jsx"
import { createUser, getUser } from "../actionCreators/index.js"

import { menuDisplay } from "../reducers/views/menu.js";
import { priceCheck } from '../reducers/views/priceCheck.js';
import { buyQuantity } from '../reducers/views/buyField.js';
import { sellField } from '../reducers/views/sellField.js';
import { showLogin } from '../reducers/views/showLogin.js';


import { purchase, sell } from '../reducers/index.js';


export class App extends React.Component{
  constructor(props) {
    super(props)
    this.menuClickHandler = this.menuClickHandler.bind(this);
    this.getStockPrice = this.getStockPrice.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleBuyButton = this.handleBuyButton.bind(this);
    this.handleBuySharesChange = this.handleBuySharesChange.bind(this);
    this.handlePriceButton = this.handlePriceButton.bind(this);
    this.findStockPriceInMarket = this.findStockPriceInMarket.bind(this)
    this.handleSellButton = this.handleSellButton.bind(this)
    this.handleSellSharesChange = this.handleSellSharesChange.bind(this)
    this.setLoginScreen = this.setLoginScreen.bind(this)
    this.handleGetUser = this.handleGetUser.bind(this)
  }

  render() {
    return (
      <div>
      <Login
        setLoginScreen={this.setLoginScreen}
        showLogin={this.props.state.views.showLogin}
        handleCreateUser={this.handleCreateUser}
        handleGetUser={this.handleGetUser}
        >
      </Login>
        <Menu
          findStockPriceInMarket={this.findStockPriceInMarket}
          handleBuyButton={this.handleBuyButton}
          handleBuySharesChange={this.handleBuySharesChange}
          handlePriceChange={this.handlePriceChange}
          dispatch={this.props.dispatch}
          state={this.props.state}
          menuClickHandler={this.menuClickHandler}
          getStockPrice={this.getStockPrice}
          handleSellButton={this.handleSellButton}
          handleSellSharesChange={this.handleSellSharesChange}
        ></Menu>
        <Portfolio
          className="below-menu"
          cash={this.props.state.user.cash}
          marketPrices={this.props.state.marketPrices}
          holdings={this.props.state.user.holdings}
        ></Portfolio>
      </div>
    )
  }
  menuClickHandler(displayItem){
    this.props.dispatch(menuDisplay(displayItem));
  }

  getStockPrice(symbol){
    return this.props.getStockPrice(symbol, this.props.dispatch)
  }
  handlePriceChange(event) {
     this.props.dispatch(priceCheck(event.target.value));

  }

  handleSellButton(){

    this.props.dispatch(sell(this.props.state))
  }

  handleBuyButton(numShares, symbol){

    this.props.dispatch(purchase(numShares, symbol, this.props.state))
  }

  handleBuySharesChange(event) {
    this.props.dispatch(buyQuantity(Number(event.target.value)));
  }

  handleSellSharesChange(event) {
    this.props.dispatch(sellField(Number(event.target.value)));
  }

  handlePriceButton(symbol){
    this.props.getStockPrice(symbol);

  }

  findStockPriceInMarket(stockSymbol){
    var stock = find(this.props.state.marketPrices, {symbol: stockSymbol});

    if (!stock) return 0;
    return stock.price;
  }

  handlePriceButton(symbol){
    this.props.getStockPrice(symbol);

  }

  setLoginScreen(shouldLoginShow) {
    this.props.dispatch(showLogin(shouldLoginShow));

  }
  handleCreateUser(username, name){
    createUser(username, name);
  }
  handleGetUser(username){
    getUser(username, this.props.dispatch);
  }

}
