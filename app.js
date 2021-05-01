// 載入相關套件
const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000
const Record = require('./models/record')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')
const app = express()

app.engine('hbs', exphbs(
  {
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
      eq: function (v1, v2) { return (v1 === v2) }
    }
  }
))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`This server is listening on http://localhost:${port}`)
})
