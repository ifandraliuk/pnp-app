const mongoose = require('mongoose')


const classTypeSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Bitte die Klasse eingeben!']
    }

})

const userTalents = require('./userTalentsModel')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Bitte einen Namen eingeben!']
    }, 
    pwd: {
        type: String,
        required: [true, 'Bitte das Passwort eingeben!']
    }, 
    talents: {
        type: [userTalents.schema]
    }
})




const mainInfoSchema = mongoose.Schema({
    age: {
        type: Number,
    },
    haircolor: {
        type: String
     }, 
    sex: {
        type: String,
     }, 
    eyecolor: {
        type: String,
     }, 
    origin: {
        type: String
     },
    more: {
        type: String
    }, 
    haircut: {
        type: String
    }
})
module.exports = mongoose.model('User', userSchema)
