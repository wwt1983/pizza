var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var app = express()
var cors = require('cors')

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


app.get('/', function (req, res) {
   var  html = '<h1>TEST SERVER</h1>' ;
   console.log(html)
});

var PORT = 3007;
app.listen(PORT, function () {
    console.log('server express listen')
})
