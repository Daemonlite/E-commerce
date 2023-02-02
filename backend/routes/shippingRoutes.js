const router = require('express').Router()

const  {getAddresses,addShippingInfo} = require('../Handlers/shippingHandler')

router.get('/',getAddresses),
router.post('/',addShippingInfo)

module.exports = router