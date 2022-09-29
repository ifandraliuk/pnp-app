const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {getClass, setClass, setAbility} = require('../controllers/classesController')


router.route('/').get(getClass).post(setClass); 
router.route('/ability').post(setAbility);
module.exports = router