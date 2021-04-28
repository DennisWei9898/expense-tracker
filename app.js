const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('老爸的私房錢')
})

app.listen(port, () => {
  console.log(`This server is listening on http://localhost:${port}`)
})
