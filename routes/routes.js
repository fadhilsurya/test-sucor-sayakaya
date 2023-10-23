const router = require('express').Router()
const product = require('./product.routes')
const transaction = require('./transaction.routes')
const user = require('./user.routes')
const { ResponseFormatter } = require('../helper/resp.helper')

router.get('/ping', (req, res) => {
    let resp = ResponseFormatter(null, 'PONG', 200, null)
    return res.json(resp)
})
router.use('/product', product)
router.use('/transaction', transaction)
router.use('/user', user)


module.exports = router