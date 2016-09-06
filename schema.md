AppState{
  holdings: [{holding}],
  marketPrices: [MarketPrice]
  user: User
  views: string
}

views {
  Buy,
  Sell,
  Check Price,
  History
}

Holding {
  numShares: number,
  symbol: string,
  avgCostBasis: number,
  userId: string
}

MarketPrice {
  symbol: string,
  price: number,
  updatedAt: date
}

User {
  name: string,
  username: string,
  id: string,
  cash: number

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
  transactions: [
  time: date,
  action: "string",
  symbol: "string",
  costBasis: number,
  numShares: number
  ]

}

{

  marketPrices: [
    {
      symbol: "aapl",
      price: 113,
      updatedAt: 9:55am
    },
    {
      symbol: "fb",
      price: 122,
      updatedAt: 9:55am
    }
  ],
  transactions: [
  time: date,
  action: "string",
  symbol: "string",
  costBasis: number,
  numShares: number
  ]
  user {
    name: "jorge",
    username: "jorge239",
    id" "13"
  }
}
