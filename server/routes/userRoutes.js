const express = require('express')
const router = express.Router()
const {registerUser, loginUser, setUserTalent} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)

router.post('/login', loginUser); 

router.get('/load', protect, setUserTalent)

//register, login, get Infos

module.exports = router