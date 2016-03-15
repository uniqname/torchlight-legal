var webpack = require("webpack");

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "app.js"
    },
    module: {
      loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['transform-runtime', 'react-require']
            }
        }, {
          test: /\.css$/,
          loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
        new webpack.optimize.UglifyJsPlugin({
            minimize: !!(process.env.NODE_ENV === 'production')
        })
    ],
    publicPath: '/public/',
    proxy: {
        '/api/*': {
            target: 'http://localhost:4000',
            forward: '/api/comments',
            secure: false
        }
    },
    devtool: "#eval"
};
