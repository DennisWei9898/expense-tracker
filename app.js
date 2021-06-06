// 載入相關套件
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const flash = require('connect-flash')

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
app.use(flash())

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  res.locals.login_error_msg = req.flash('login_error_msg')
  res.locals.registerSuccess = req.flash('registerSuccess')
  res.locals.passportError = req.flash('errors')
  next()
})

app.use(routes)

app.listen(PORT, () => {
  console.log(`This server is listening on http://localhost:${PORT}`)
})
