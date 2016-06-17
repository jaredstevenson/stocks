import { createStore } from 'redux';
import { reducer } from './reducers/index.js';

import React from "react";
import { render } from "react-dom";
import { App } from "./components/App.jsx";
import './style.css';

//to do: work on connecting stock prices to get current price.
// also continue to write redux functions. the skeleton is connected.

//dummyData is in the format that I want my future data
const dummyData = {
  holdings: [
    {
      numShares: 100,
      symbol: "aapl",
      avgCostBasis: 110,
      userId: "13"

    },
    {
      numShares: 200,
      symbol: "fb",
      avgCostBasis: 120,
      userId: "13"

    }
  ],
  marketPrices: [
    {
      symbol: "aapl",
      price: 98,
      updatedAt: new Date()
    },
    {
      symbol: "fb",
      price: 122,
      updatedAt: new Date()
    }
  ],
  user: {
    name: "jorge",
    username: "jorge239",
    id: "13"
  },
  views: {
    menu: {
      openDropDown: null
    }
  },
  transactions: {
    buy: [{
      symbol: "aapl",
      quantity: 100,
      costPerShare: 97,
      date: "13 June"
    },
    {
      symbol: "fb",
      quantity: 200,
      costPerShare: 110,
      date: "1 June"
    }],
    sell: [
      {
        symbol: "aapl",
        quantity: 100,
        costPerShare: 105,
        date: "15 June"
      },
      {
        symbol: "fb",
        quantity: 100,
        costPerShare: 97,
        date: "10 June"
      }
    ]

  }
}

const store = createStore(reducer, dummyData)
store.subscribe(()=>{
  renderPage(store.getState());

})

store.dispatch({
  type: "MENU_DISPLAY_BUY"
})

function renderPage(state) {
render(<App state={state} dispatch={store.dispatch}></App>, document.getElementById("app"))
}

renderPage(store.getState());
