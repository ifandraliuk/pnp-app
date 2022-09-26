const mongoose = require('mongoose')

const attributeSchema = mongoose.Schema(
    {
        strength:{
            type: Number,
        },
        dexterity: {
            type: Number,
        },
        intelligent: {
            type: Number,
        },
        vitality: {
            type: Number,
            required: [true, 'Vitalität einbegben']
        },    
        stamina: {
            type: Number,
        },  
        charisma: {
            type: Number,
        },  
        mana: {
            type: Number,
        },   
        spirit: {
            type: Number,
        }
    }
)

module.exports = mongoose.model('Attribute', attributeSchema)