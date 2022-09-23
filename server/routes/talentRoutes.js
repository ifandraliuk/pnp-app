const express = require('express')
const router = express.Router()
const {getTalent, setTalent, updateTalent, deleteTalent} = require('../controllers/talentController')


router.route('/').get(getTalent).post(setTalent); 
router.route('/:id').put(updateTalent).delete(deleteTalent);
module.exports = router