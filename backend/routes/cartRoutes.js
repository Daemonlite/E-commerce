const router = require('express').Router()
const {getCart,addCart,deleteCart} = require('../Handlers/cartHandler')
const {verifyToken} = require('../middleware/verify')


router.get('/',getCart)
router.post('/',verifyToken,addCart)
router.delete('/:id',verifyToken,deleteCart)

module.exports = router

