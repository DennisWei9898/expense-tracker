const express = require('express')
const Record = require('../../models/record')
const router = express.Router()

router.get('/', (req, res) => {
  const userId = req.user._id
  const filter = req.query.filter
  return Record.find({ category: filter, userId })
    .lean()
    .then((records, totalAmount) => {
      totalAmount = records.reduce((prev, curr) => prev + curr.amount, 0)
      res.render('index', { records, filter, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router
