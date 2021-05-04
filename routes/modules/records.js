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
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => res.render('edit', record))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date, category, amount } = req.body
  let iconArray = categoryList.filter((item, index, array) => { return item.category === category })
  let categoryIcon = iconArray[0].categoryIcon
  return Record.findById(id)
    .then(record => {
      // record = Object.assign(record, {
      //   name: name,
      //   date: date, 
      //   category: category,
      //   amount: amount,
      //   categoryIcon: categoryIcon
      // })
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      record.categoryIcon = categoryIcon
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router
