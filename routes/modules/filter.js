const express = require('express')
const Record = require('../../models/record')
const router = express.Router()

router.get('/', (req, res) => {
  const filter = req.query.filter
  console.log(filter)
  return Record.find({ category: filter })
    .lean()
    .then((records, totalAmount) => {
      totalAmount = records.reduce((prev, curr) => prev + curr.amount, 0)
      console.log(records)
      console.log('totalAmount:', totalAmount)
      res.render('index', { records, filter, totalAmount })
    })

    .catch(error => console.log(error))
})

module.exports = router
