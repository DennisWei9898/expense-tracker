const Category = require('../category')
const db = require('../../config/mongoose')
const categoryList = require('./categoryList.json').category

db.once('open', () => {
  console.log('mongodb connected')
  Category.create(Object.assign(categoryList))
  console.log('done')
})
