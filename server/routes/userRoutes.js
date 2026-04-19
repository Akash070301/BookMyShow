const router = require('express').Router()
const { createUser, userLogin} = require('../controller/userController')
router.post('/register',createUser)
router.post('/login',userLogin)
module.exports = router;