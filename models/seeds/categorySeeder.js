const Category = require('../category')
const db = require('../../config/mongoose')
const categoryList = require('./categoryList.json').category

// db.once('open', () => {
//   console.log('mongodb connected')
//   Category.create(Object.assign(categoryList))
//   console.log('done')
// })

db.once('open', () => {
  for (let i = 0; i < categoryList.length; i++) {
    Category.create({
      category: categoryList[i].category,
      categoryIcon: categoryList[i].categoryIcon
    })
  }
  console.log('Category done!')
})
