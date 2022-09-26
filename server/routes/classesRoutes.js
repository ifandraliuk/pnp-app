const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {getClass, setClass, addClass} = require('../controllers/classesController')


router.route('/').get(getClass).post(setClass); 
router.route('/forme').post(protect, addClass)
module.exports = router