const mongoose = require('mongoose')

const generalSchema = mongoose.Schema(
    {
        age:{
            type: Number,
            required: [true, 'das Alter einbegben']
        },
        haircolor: {
            type: String,
        },
        sex: {
            type: String,
            required: [true, 'das Geschlecht einbegben']
        },
        eyecolor: {
            type: String,
            required: [true, 'die Augenfarbe einbegben']
        },    
        origin: {
            type: String,
            required: [true, 'den Herkunft einbegben']
        },  
        more: {
            type: String,
        },  
        haircut: {
            type: String,
            required: [true, 'die Frisur einbegben']
        },   
    }
)

module.exports = mongoose.model('General', generalSchema)