import { find } from 'lodash';

export function updateStockPrice (symbol, price){

  return {
    type: "UPDATE_STOCK_PRICE",
    payload: {
      symbol: symbol,
      price: price
    }
  }
}


export function reducer(marketPrices = [], action) {

  switch(action.type) {
    case "UPDATE_STOCK_PRICE":
      if (!action.payload.price) return marketPrices
      if (!!find(marketPrices, {symbol: action.payload.symbol})){

        return marketPrices.map((stock)=>{
          if (stock.symbol === action.payload.symbol){
            return Object.assign({}, stock, {
              price: action.payload.price
            })
          }

          return stock;
        })}else {

            return marketPrices.concat([{
              symbol: action.payload.symbol,
              price: action.payload.price,
              updatedAt: new Date()
            }])
        }
    default:
      return marketPrices;
  }
}
