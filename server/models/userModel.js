const mongoose = require('mongoose')
const userTalents = require('./userTalentsModel')
const userClass = require('./classesModel')
const general = require('./generalModel')
const attribute = require('./attributesModel')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Bitte einen Namen eingeben!']
    }, 
    pwd: {
        type: String,
        required: [true, 'Bitte das Passwort eingeben!']
    }, 
    userclass:{
        type: mongoose.Types.ObjectId
    },
    general: {
        type: general.schema
    },
    talents: {
        type: [userTalents.schema]
    },
    attributes: {
        type: attribute.schema
    },
})


module.exports = mongoose.model('User', userSchema)
