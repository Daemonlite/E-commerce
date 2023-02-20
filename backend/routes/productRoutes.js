const router = require('express').Router()
const {verifyToken} = require('../middleware/verify')
const  {getProducts,addProduct,deleteProduct,updateProduct} =
 require('../Handlers/productHandler')

router.get('/',getProducts)
router.post('/',addProduct)
router.put('/:id',verifyToken,updateProduct)
router.delete('/:id',verifyToken,deleteProduct)

module.exports = router