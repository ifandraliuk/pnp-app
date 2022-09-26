const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {setAttributes, getAttributes} = require('../controllers/attributeController')

router.route('/').get(protect,getAttributes).post(protect, setAttributes); 

module.exports = router