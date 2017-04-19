var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser');
var config = require('./config')
var routes = require('./src/server/controllers/routes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src', 'server', 'views'))

if (process.env.NODE_ENV !== 'production') {
  var staticPath = path.join(__dirname, 'public')
  app.use('/static', express.static(staticPath))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
routes(app)

app.listen(config.port, function () {
  console.log("listening on port " + config.port)
})
