const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const records = require('./modules/records')
const filter = require('./modules/filter')
const users = require('./modules/users')

router.use('/', home)
router.use('/records', records)
router.use('/users', users)
router.use('/filter', filter)

module.exports = router
