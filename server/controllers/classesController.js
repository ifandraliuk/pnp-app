const asyncHandler = require('express-async-handler')
const UserClass = require('../models/classesModel')
const User = require('../models/userModel')

// @desc Get classes
// @route GET /classes/
// @access Public
const getClass = asyncHandler( async (req, res) => {
    const userclasses = await UserClass.find()
    res.status(200).json(userclasses)
})


// @desc Set new class
// @route POST /classes/
// @access Public
const setClass = asyncHandler( async (req, res) => {
     if(!req.body.name){
        res.status(400)
        throw new Error("Falsch! Das Feld darf nicht leer sein")
    }
    
    const userClasses = await UserClass.create({
        category: req.body.category,
        name: req.body.name,
        dice: req.body.dice,
    }) 
    res.status(200).json(talent) 
})

// @desc Add Class to user
// @route POST /classes/forme
// @access Private
const addClass = asyncHandler( async (req, res) => {
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
    res.status(200).json(toUpdate)
})

module.exports = {
    getClass, setClass,
    addClass,
}