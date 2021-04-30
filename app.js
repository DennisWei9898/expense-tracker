// 載入相關套件
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.send('老爸的私房錢')
})

app.listen(port, () => {
  console.log(`This server is listening on http://localhost:${port}`)
})
