const mongoose = require('mongoose')

const talentSchema = mongoose.Schema(
    {
        category: {
            type: String,
            required: [true, 'Bitte füge die Kategorie hinzu!']
        },
        name: {
            type: String,
            required: [true, 'Bitte den Namen eingeben']
        },
        dice: {
            type: String,
            required: [true, 'Bitte füge die Würfel hinzu!']
        },
    }
)

module.exports = mongoose.model('Talent', talentSchema)