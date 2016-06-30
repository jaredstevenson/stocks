var HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: "./src/public/main.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {


        loaders: [
          { test: /\.css$/, loader: "style!css" },
          { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel",  "query":{presets: [ 'es2015', 'react']} }

        ]
    },

    devServer: {
      port: 3001,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          inject: false,
          template: 'node_modules/html-webpack-template/index.ejs',
          title: 'Stocks',
          devServer: 'http://localhost:3001',
          appMountId: 'app'
        }
      )
    ]
};
