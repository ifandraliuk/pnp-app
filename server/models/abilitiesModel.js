const mongoose = require('mongoose')

const abilitiesSchema = mongoose.Schema(
    {    
        name: {
            type: String,
            required: [true, 'Klasse eingeben']
        },
        price: {
            type: Number,
            required: [true, 'Kosten eingeben']
        },
        type: {
            type: String,
            required: [true, 'Art der Fertigkeit eingeben']
        },
        description: {
            type: String,
            required: [true, 'Beschreibung eingeben']
        },
    }
)

module.exports = mongoose.model('Abilities', abilitiesSchema)