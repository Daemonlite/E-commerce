const router = require('express').Router()

const {addCategory,getCategory} = require('../Handlers/categoryHandler')

router.get('/',getCategory)
router.post('/',addCategory)

module.exports = router