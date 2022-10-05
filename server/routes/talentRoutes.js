const express = require('express')
const router = express.Router()
const {getTalent, setTalent, updateTalent, deleteTalent} = require('../controllers/talentController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getTalent).post(setTalent); 
router.route('/:id').put(protect, updateTalent).delete(protect, deleteTalent);
module.exports = router