import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Portfolio } from "./Portfolio.jsx"
import { Menu } from "./Menu.jsx"


export class App extends React.Component{
  render() {
    return (
      <div>
        <Menu data={this.props.data}></Menu>
        <Portfolio className="below-menu" marketPrices={this.props.data.marketPrices} holdings={this.props.data.holdings}></Portfolio>
      </div>
    )
  }
}
