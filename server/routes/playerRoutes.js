const express = require('express')
const router = express.Router()
const {getPlayer, setAttributes, getGeneral, setGeneral, addClass} = require('../controllers/playerController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getPlayer);
router.post('/attributes', protect, setAttributes); 
router.route('/general').get(protect,getGeneral).post(protect, setGeneral); 
router.post('/uclass', protect, addClass); 
module.exports = router