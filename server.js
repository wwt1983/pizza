var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var nodeMailer = require('nodemailer');

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}))
// serve static assets normally
app.use(express.static(__dirname + '/public'))

var serverFunctions = require('./serverFunctions');


app.post('/sendemail', (req, res) => {
    console.log('test send req.body order: '+  serverFunctions.returnJsonObj(req.body.order))
    if (!req.body.order) {
        return res.status(400).send({error: true, message: 'Please provide order'});
    }else {
        let transporter = nodeMailer.createTransport({service: 'yandex', port: 587, secure: false, auth: {user: 'info@mozzarella174.ru', pass: 'poddiluigi' }});
        //письмо о заказе нам
        let mailOptions = serverFunctions.mailerOptions(req.body.order);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
        });
        //письмо о заказе клиенту
        let mailOptionsClient = serverFunctions.mailerOptionsForClient(req.body.order.email);
        transporter.sendMail(mailOptionsClient, (error, info) => {
            if (error) {
                return console.log(error);
            }
        });
        return res.send({ error: false, data: 'ok', message: 'New order has been send successfully.' });
    }
});

app.get('*', function (request, response){
    response.sendFile(__dirname + '/public/' + 'index.html')
});



const port = process.env.PORT || 3003;
app.listen(port, function () {
    console.log('server express listen PORT ' + port)
});
