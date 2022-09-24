const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {getGeneral, createGeneral} = require('../controllers/generalInfoController')

router.route('/').get(protect,getGeneral).post(protect, createGeneral); 

module.exports = router