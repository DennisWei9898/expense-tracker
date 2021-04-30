// 載入相關套件
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const Record = require('./models/record')

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

app.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`This server is listening on http://localhost:${port}`)
})
