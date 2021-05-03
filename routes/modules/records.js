const express = require('express')
const Record = require('../../models/record')
const categoryList = require('../../models/seeds/categoryList.json').category
const router = express.Router()

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/new', (req, res) => {
  const { name, date, category, amount } = req.body
  let iconArray = categoryList.filter((item, index, array) => { return item.category === category })
  let categoryIcon = iconArray[0].categoryIcon
  return Record.create({
    name: name,
    date: date,
    category: category,
    amount: amount,
    categoryIcon: categoryIcon
  }
  )
    .then(res.redirect('/'))
    .then(console.log(categoryIcon))
    .catch(error => console.log(error))
})
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => res.render('edit', record))
    .catch(error => console.log(error))
})

router.put('/records/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect(`/records/${id}`))
    .catch(error => console.log(error))
})

module.exports = router
