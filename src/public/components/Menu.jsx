import React from 'react';
import * as ReactDOM from 'react-dom';
import { Buy } from './Buy.jsx';
import { Sell } from './Sell.jsx';
import { Price } from './Price.jsx';
import { History } from './History.jsx';
import { classNames } from 'classnames';
import {updateAllPrices} from '../actionCreators/index.js'




export class Menu extends React.Component {
  render() {
    const menuClickHandler = this.props.menuClickHandler;
    const dropDownClassCheckPrice = (this.props.state.views.menu.openDropDown == 'checkPrice') ? "dropdown-content show": "dropdown-content"
    const dropDownClassBuy = (this.props.state.views.menu.openDropDown == 'buy') ? "dropdown-content show": "dropdown-content"
    const dropDownClassSell = (this.props.state.views.menu.openDropDown == 'sell') ? "dropdown-content show": "dropdown-content"
    const dropDownClassHistory = (this.props.state.views.menu.openDropDown == 'history') ? "dropdown-content show": "dropdown-content"

    return (
      <div>

          <ul>
            <li><a class="" href="javascript:void(0)" onClick={()=>menuClickHandler('buy')}>Buy</a>
              <div className={dropDownClassBuy}>
                <Buy
                  findStockPriceInMarket={this.props.findStockPriceInMarket}
                  handleBuyButton={this.props.handleBuyButton}
                  handleBuySharesChange={this.props.handleBuySharesChange}
                  handlePriceChange={this.props.handlePriceChange}
                  state={this.props.state}
                  getStockPrice={this.props.getStockPrice}
                ></Buy>
              </div>
            </li>
            <li><a href="javascript:void(0)" onClick={()=>menuClickHandler('sell')}>Sell</a>
              <div className={dropDownClassSell}>
                <Sell
                  findStockPriceInMarket={this.props.findStockPriceInMarket}
                  handlePriceChange={this.props.handlePriceChange}
                  getStockPrice={this.props.getStockPrice}
                  handleSellButton={this.props.handleSellButton}
                  handleSellSharesChange={this.props.handleSellSharesChange}
                  state={this.props.state}
                ></Sell>
              </div>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn" onClick={()=>menuClickHandler('checkPrice')}>Check Price</a>
              <div className={ dropDownClassCheckPrice }>
               <Price findStockPriceInMarket={this.props.findStockPriceInMarket} handlePriceChange={this.props.handlePriceChange} dispatch={this.props.dispatch} state={this.props.state} getStockPrice={this.props.getStockPrice}></Price>
              </div>
            </li>
            <li><a href="javascript:void(0)" onClick={()=>menuClickHandler('history')}>History</a>
              <div className={ dropDownClassHistory }>
                <History transactions={this.props.state.user.transactions}></History>
              </div>
            </li>
            <li><a href="javascript:void(0)" onClick={()=>updateAllPrices(this.props.state.user.holdings, this.props.dispatch)}>Update Portfolio Prices</a>

            </li>
          </ul>

      </div>
  )}
}
