const mongoose = require('mongoose')
const Abilities = require('./abilitiesModel')

const classesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name der Klasse eingeben']
        },
        category: {
            type: String, 
            required: [true, 'Kategorie der Klasse eingeben (Ausdauerklasse, Manaklasse, Spiritklasse)']
        },
        description: {
            type: String,
            required: [true, 'Beschreibung eingeben']
        },
        abilities: {
            type: [Abilities.schema],
            required: [true, 'Fertigkeiten eingeben']
        },
        advantages: {
            type: String,
            required: [true, 'Vorteile eingeben']
        }
    }
)

module.exports = mongoose.model('UserClass', classesSchema)