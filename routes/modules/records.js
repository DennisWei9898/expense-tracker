const express = require('express')
const Record = require('../../models/record')
const router = express.Router()

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/new', (req, res) => {
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
