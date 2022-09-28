const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {getClass, setClass, addClass, setAbility} = require('../controllers/classesController')


router.route('/').get(protect, getClass).post(setClass); 
router.route('/ability').post(setAbility);
router.route('/forme').post(protect, addClass)
module.exports = router