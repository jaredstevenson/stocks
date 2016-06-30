import React from 'react';
import * as ReactDOM from 'react-dom';
import { Buy } from './Buy.jsx';
import { Sell } from './Sell.jsx';
import { Price } from './Price.jsx';
import { History } from './History.jsx';
import { classNames } from 'classnames';



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
                <Buy state={this.props.state} getStockPrice={this.props.getStockPrice}></Buy>
              </div>
            </li>
            <li><a href="javascript:void(0)" onClick={()=>menuClickHandler('sell')}>Sell</a>
              <div className={dropDownClassSell}>
                <Sell getStockPrice={this.props.getStockPrice}></Sell>
              </div>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn" onClick={()=>menuClickHandler('checkPrice')}>Check Price</a>
              <div className={ dropDownClassCheckPrice }>
               <Price dispatch={this.props.dispatch} state={this.props.state} getStockPrice={this.props.getStockPrice}></Price>
              </div>
            </li>
            <li><a href="javascript:void(0)" onClick={()=>menuClickHandler('history')}>History</a>
              <div className={ dropDownClassHistory }>
                <History state={this.props.state}></History>
              </div>
            </li>
          </ul>

      </div>
  )}
}
