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
// serve static assets normally
app.use(express.static(__dirname + '/public'))
// Handles all routes so you do not get a not found error

app.get('/', function (request, response){
    console.log('main server page')
    response.sendFile(__dirname + '/public/' + 'index.html')

})

app.get('*', function (request, response){
    response.sendFile(__dirname + '/public/' + 'index.html')
})

var PORT = 3004;
app.listen(PORT, function () {
    console.log('server express listen')
})
