const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then((records, totalAmount) => {
      totalAmount = records.reduce((prev, curr) => prev + curr.amount, 0)
      console.log(records)
      console.log('totalAmount:', totalAmount)
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router
