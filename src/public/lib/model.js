import { find, findIndex, filter } from 'lodash';

//This has the backend for buy and sell parts of the program

export function buyShares (state) {
  let stock = find(state.marketPrices, {symbol: state.views.priceCheck.symbol})
  let dollarAmount = stock.price * state.views.buyField.numberShares
  let newCash = state.user.cash - dollarAmount;
  if (!isCashAvailable(dollarAmount, state.user)){
    return state;
  }
  if (hasStock(state.views.priceCheck.symbol, state.user.holdings)){
    state = addTransaction("buy", state.views.buyField.numberShares, stock.price, state);
    console.log("addTransaction result", state.user);
    return Object.assign({}, state, {
      user: Object.assign({}, state.user, {
        cash: newCash,
        holdings: state.user.holdings.map((holding)=>{
          if(holding.symbol === stock.symbol){
            holding.numShares += state.views.buyField.numberShares;
            holding.avgCostBasis = ((dollarAmount + (holding.avgCostBasis * (holding.numShares - state.views.buyField.numberShares))) / holding.numShares)
            return holding;
          }else return holding;
        })
      })

    })
  }
  if (!hasStock(state.views.priceCheck.symbol, state.user.holdings)){
    state = addTransaction("buy", state.views.buyField.numberShares, stock.price, state);
    console.log("addTransaction result", state.user);

    return Object.assign({}, state, {
      user: Object.assign({}, state.user, {
        cash: newCash,
        holdings: state.user.holdings.concat([{
          numShares: state.views.buyField.numberShares,
          symbol: state.views.priceCheck.symbol,
          avgCostBasis: (dollarAmount / state.views.buyField.numberShares),
        }])
      }),


    })
  }

}

export function sellShares (state) {
  let currentHolding = find(state.user.holdings, {symbol: state.views.priceCheck.symbol})
  let currentHoldingPrice = find(state.marketPrices, {symbol: state.views.priceCheck.symbol})
  let dollarAmount = currentHoldingPrice.price * state.views.sellField.numberShares
  let newCash = state.user.cash + dollarAmount;
  console.log("newCash", newCash, state.user.cash);

  if(!hasStock(state.views.priceCheck.symbol, state.user.holdings)){
    return state;
  }
  if( state.views.sellField.numberShares > currentHolding.numShares){
    return state;
  }
  state = addTransaction("sell", state.views.sellField.numberShares, currentHoldingPrice.price, state);

  if (state.views.sellField.numberShares === currentHolding.numShares){
    return Object.assign({}, state, {
      user: Object.assign({}, state.user, {
        cash: newCash,
        holdings: filter(state.user.holdings, (holding)=>{
          return holding.symbol !== currentHolding.symbol
        })
      })

    })
  }
  return Object.assign({}, state, {
    user: Object.assign({}, state.user, {
      cash: newCash,
      holdings: state.user.holdings.map((holding)=>{
        if (currentHolding.symbol === holding.symbol){
          console.log("inside correct holding", holding.numShares);
          holding.numShares -= state.views.sellField.numberShares;
          return holding;
        }else return holding;
      })
    })

  })
}

export function addTransaction (actionType, numShares, price, state){
  console.log("addTransaction called state", state);
  return Object.assign({}, state, {
    user: Object.assign({}, state.user, {
      transactions: state.user.transactions.concat([{
        actionType: actionType,
        time: new Date(),
        numShares: numShares,
        symbol: state.views.priceCheck.symbol,
        price: price
      }])
    })


  })
}

export function isCashAvailable (dollarAmount, user) {
  if (dollarAmount <= user.cash){
    return true;
  }else {
    return false;
  }
}

export function hasStock (symbol, holdings){
  return (!!find(holdings, {symbol: symbol}))
}
