const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const records = require('./modules/records')
const filter = require('./modules/filter')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/records', authenticator, records)
router.use('/users', users)
router.use('/filter', authenticator, filter)
router.use('/', authenticator, home)

module.exports = router
