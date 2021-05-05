const Record = require('../record')
const db = require('../../config/mongoose')
const recordList = require('./recordList.json').record
const categoryList = require('./categoryList.json').category

db.once('open', () => {
  console.log('mongodb connected')
  for (let i = 0; i < recordList.length; i++) {
    for (let j = 0; j < categoryList.length; j++) {
      if (recordList[i].category === categoryList[j].category) {
        Record.create({
          name: recordList[i].name,
          category: recordList[i].category,
          date: recordList[i].date,
          amount: recordList[i].amount,
          categoryIcon: categoryList[j].categoryIcon
        })
      }
    }
  }

  console.log('done')
})
