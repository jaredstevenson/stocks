import { createStore } from 'redux';
import { reducerWithLog as reducer } from './reducers/index.js';
import axios from 'axios';
import {getStockPrice} from './actionCreators/index.js'

import React from "react";
import { render } from "react-dom";
import { App } from "./components/App.jsx";
import './style.css';

var stock;

//dummyData is in the format that I want my future data
const dummyData = {
user:{name:"",username:"",cash:1000000,holdings:[],transactions:{}},

marketPrices: [
    {
      symbol: "aapl",
      price: 110,
      updatedAt: new Date()
    },
    {
      symbol: "fb",
      price: 115,
      updatedAt: new Date()
    }
  ],
  // user: {
  //   name: "jorge",
  //   username: "jorge239",
  //   id: "13",
  //   cash: 1000000,
  //   holdings: [
  //     {
  //       numShares: 100,
  //       symbol: "aapl",
  //       avgCostBasis: 110,
  //       userId: "13"
  //
  //     },
  //     {
  //       numShares: 200,
  //       symbol: "fb",
  //       avgCostBasis: 120,
  //       userId: "13"
  //
  //     }
  //   ],
  //   transactions: {
  //     buy: [{
  //       symbol: "aapl",
  //       quantity: 100,
  //       costPerShare: 97,
  //       date: "13 June"
  //     },
  //     {
  //       symbol: "fb",
  //       quantity: 200,
  //       costPerShare: 110,
  //       date: "1 June"
  //     }],
  //     sell: [
  //       {
  //         symbol: "aapl",
  //         quantity: 100,
  //         costPerShare: 105,
  //         date: "15 June"
  //       },
  //       {
  //         symbol: "fb",
  //         quantity: 100,
  //         costPerShare: 97,
  //         date: "10 June"
  //       }
  //     ]
  //
  //   }
  // },
  views: {
    menu: {
      openDropDown: null
    },
    priceCheck: {
        symbol: ""
    },
    buyField: {
      numberShares: 0
    },
    sellField: {
      numberShares: 0
    },
    showLogin: {
      show: false
    }
  }

}




const store = createStore(reducer, dummyData)
store.subscribe(()=>{
  renderPage(store.getState());
})



function renderPage(state) {
render(<App state={state} dispatch={store.dispatch} getStockPrice={getStockPrice}></App>, document.getElementById("app"))
}
renderPage(store.getState());
