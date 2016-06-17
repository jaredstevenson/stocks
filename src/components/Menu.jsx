import React from 'react';
import * as ReactDOM from 'react-dom';
import { Buy } from './Buy.jsx';
import { Sell } from './Sell.jsx';
import { Price } from './Price.jsx';
import { History } from './History.jsx';



export class Menu extends React.Component {
  render() {
    const dropDownClassCheckPrice = (this.props.data.views.menu.checkPriceDropdownOpen) ? "dropdown-content show": "dropdown-content"
    const dropDownClassBuy = (this.props.data.views.menu.buyDropdownOpen) ? "dropdown-content show": "dropdown-content"
    const dropDownClassSell = (this.props.data.views.menu.sellDropdownOpen) ? "dropdown-content show": "dropdown-content"
    const dropDownClassHistory = (this.props.data.views.menu.historyDropdownOpen) ? "dropdown-content show": "dropdown-content"

    return (
      <div>

          <ul>
            <li><a class="" href="javascript:void(0)">Buy</a>
              <div className={dropDownClassBuy}>
                <Buy></Buy>
              </div>
            </li>
            <li><a href="javascript:void(0)">Sell</a>
              <div className={dropDownClassSell}>
                <Sell></Sell>
              </div>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn" onclick="">Check Price</a>
              <div className={ dropDownClassCheckPrice }>
               <Price></Price>
              </div>
            </li>
            <li><a href="javascript:void(0)">History</a>
              <div className={ dropDownClassHistory }>
                <History data={this.props.data}></History>
              </div>
            </li>
          </ul>

      </div>
  )}
}
