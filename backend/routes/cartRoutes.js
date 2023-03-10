const router = require('express').Router()
const {getCart,addCart,deleteCart} = require('../Handlers/cartHandler')
const {verifyToken} = require('../middleware/verify')


router.get('/',getCart)
router.post('/',addCart)
router.delete('/:id',deleteCart)

module.exports = router

