// 載入相關套件
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const routes = require('./routes')
const usePassport = require('./config/passport')
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

app.use(session({
  secret: 'ThisIsMyScret',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)
app.use(routes)

app.listen(PORT, () => {
  console.log(`This server is listening on http://localhost:${PORT}`)
})
