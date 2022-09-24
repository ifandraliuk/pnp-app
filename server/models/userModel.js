const mongoose = require('mongoose')
const userTalents = require('./userTalentsModel')
const general = require('./generalModel')

const classTypeSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Bitte die Klasse eingeben!']
    }

})



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Bitte einen Namen eingeben!']
    }, 
    pwd: {
        type: String,
        required: [true, 'Bitte das Passwort eingeben!']
    }, 
    general: {
        type: general.schema
    },
    talents: {
        type: [userTalents.schema]
    }
})


module.exports = mongoose.model('User', userSchema)
