const router = require('express').Router()
const {getUsers,register,loginUser,updateUserInfo,resetPasswordCode,deleteUser} = require('../Handlers/userHandler')
const {verifyToken} = require('../middleware/verify')

router.get('/',getUsers)
router.post('/register',register)
router.post('/login',loginUser)
router.put('/update/:id',updateUserInfo)
router.post('/reset',resetPasswordCode)
router.delete('/:id',deleteUser)

module.exports = router