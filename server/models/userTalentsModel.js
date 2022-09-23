const mongoose = require('mongoose')

const userTalentsSchema = mongoose.Schema({
    talent: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Talent',
    },
    points: {
        type: Number,
        required: [true, 'die Werte einbegben']
    }
})

module.exports = mongoose.model('UserTalents', userTalentsSchema)