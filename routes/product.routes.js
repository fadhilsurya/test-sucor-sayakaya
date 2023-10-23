const router = require('express').Router()
const { Get } = require('../controller/product.controller')

router.get('/', Get)


module.exports = router