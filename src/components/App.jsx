import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Portfolio } from "./Portfolio.jsx"
import { Menu } from "./Menu.jsx"
import { menuDisplay } from "../reducers/views/menu.js";


export class App extends React.Component{
  constructor(props) {
    super(props)
    this.menuClickHandler = this.menuClickHandler.bind(this);


  }

  render() {
    return (
      <div>
        <Menu state={this.props.state} menuClickHandler={this.menuClickHandler}></Menu>
        <Portfolio className="below-menu" marketPrices={this.props.state.marketPrices} holdings={this.props.state.holdings}></Portfolio>
      </div>
    )
  }
  menuClickHandler(displayItem){
    this.props.dispatch(menuDisplay(displayItem));
  }
}
