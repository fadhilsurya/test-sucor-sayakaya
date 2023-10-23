const router = require('express').Router()
const { Insert } = require('../controller/transaction.controller')

router.post('/', Insert)


module.exports = router