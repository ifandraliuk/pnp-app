const express = require('express')
const router = express.Router()
const {getUser} = require('../controllers/userController')
const {registerUser, loginUser, getUserData, setUserTalent} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)

router.post('/login', loginUser); 

router.get('/me', protect, getUserData); 

router.get('/load', protect, setUserTalent)

//register, login, get Infos

module.exports = router