const express = require('express')
const Record = require('../../models/record')
const categoryList = require('../../models/seeds/categoryList.json').category
const router = express.Router()

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/new', (req, res) => {
  const { name, date, category, amount, merchant } = req.body
  const userId = req.user._id
  const iconArray = categoryList.filter((item, index, array) => { return item.category === category })
  const categoryIcon = iconArray[0].categoryIcon
  return Record.create({
    name: name,
    date: date,
    category: category,
    amount: amount,
    categoryIcon: categoryIcon,
    merchant: merchant,
    userId: userId
  }
  )
    .then(res.redirect('/'))
    .then(console.log(categoryIcon))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const name = req.body.name
  return Record.create({ name, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
}
)

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, date, category, amount, merchant } = req.body
  const iconArray = categoryList.filter((item, index, array) => { return item.category === category })
  const categoryIcon = iconArray[0].categoryIcon
  return Record.findOne({ _id, userId })
    .then(record => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      record.categoryIcon = categoryIcon
      record.merchant = merchant
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
