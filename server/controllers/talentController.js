const asyncHandler = require('express-async-handler')
const Talent = require('../models/talentModel')


const getTalent = asyncHandler( async (req, res) => {
    const talents = await Talent.find()
    res.status(200).json(talents)
})

const setTalent = asyncHandler( async (req, res) => {
     if(!req.body.name){
        res.status(400)
        throw new Error("Falsch! Das Feld darf nicht leer sein")
    }
    
    const talent = await Talent.create({
        category: req.body.category,
        name: req.body.name,
        dice: req.body.dice,
    }) 
    res.status(200).json(talent) 
})

const updateTalent = asyncHandler( async (req, res) => {
    const talent = await Talent.findById(req.params.id)
    if (!talent){
        res.status(400)
        throw new Error("Der Talent wurde nicht gefunden")
    }
    if(!req.user){
        res.status(401)
    }
    // Logged in user matches talent user
    if(talent.user.toString() !== req.user.id){
        res.status(401)
    }
    const toUpdate = await Talent.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    if(!toUpdate){
        res.status(400)
    }
    res.status(200).json(toUpdate)
})

const deleteTalent = asyncHandler( async (req, res) => {
    const talent = await Talent.findById(req.params.id)
    if (!talent){
        res.status(400)
        throw new Error("Der Talent wurde nicht gefunden")
    }

    await talent.remove()
    res.status(200).json({id: req.params.id})
})
module.exports = {
    getTalent, setTalent, updateTalent, deleteTalent
}