const asyncHandler = require('express-async-handler')
const UserClass = require('../models/classesModel')
const User = require('../models/userModel')
const Abilities = require('../models/abilitiesModel')
const { default: mongoose } = require('mongoose')
// @desc Get classes
// @route GET /classes/:name
// @access Public
const getClass = asyncHandler( async (req, res) => {
    const userclasses = await UserClass.find({})
    if(!userclasses){
        res.status(400).json({message: "Keine Klassen gefunden"})
        throw new Error("Falsch! Das Feld darf nicht leer sein")        
    }
    res.status(200).json(userclasses)
})


// @desc Set new class
// @route POST /classes/
// @access Public
const setClass = asyncHandler( async (req, res) => {
     if(!req.body.name && !req.body.category){
        res.status(400)
        throw new Error("Falsch! Das Feld darf nicht leer sein")
    }
    if(req.body.category ==='Ausdauerklasse' || req.body.category ==='Manaklasse' || req.body.category ==='Spiritklasse'){

        const userClasses = await UserClass.create(req.body)
        /* 
        const userClasses = await UserClass.create({
            name: req.body.name,
            category: req.body.category, 
            description: req.body.description,
            advantages: req.body.advantages, 
        }) */
        if(!userClasses){
            res.status(400)
            throw new Error("Die Klasse konnte nicht erstellt werden")
        }
        res.status(200).json(userClasses) 
    } else {               
        res.status(400)
        throw new Error("Eingabe der Kategorie ist falsch")
    }
})
// @desc Add Class to user
// @route POST /ability
// @access Public
const setAbility = asyncHandler(async (req, res)=>{
    if (req.body.type==='stamina' || req.body.type==='mana' || req.body.type==='spirit'){
        const abilitiy = await Abilities.create({
            name: req.body.name,
            price: req.body.price,
            type: req.body.type,
            description: req.body.description
        })
        if(!abilitiy){
            res.status(400).json(req.body)
            throw new Error("Die Fertigkeit konnte nicht erstellt werden")      
        }
        const doc = await UserClass.findOneAndUpdate({name: req.body.classname}, {$push:{abilities: abilitiy}}, {new: true})
        console.log(doc)
        if(!doc){
            res.status(400)
            throw new Error("Das Update ist falsch")             
        }
        res.status(400).json(doc)
    } else {
        res.status(400)
        throw new Error("Die Kategorie ist falsch")       
    }
})

// @desc Add Class to user
// @route POST /classes/forme
// @access Private
const addClass = asyncHandler( async (req, res) => {
    const userclass = await UserClass.find({name: req.body.name})
    if (!userclass){
        res.status(400).json({message: "Die Klasse wurde noch nicht hinzugefügt"})
        throw new Error("Die Klasse wurde noch nicht hinzugefügt")
    }
    if(!req.user){
        res.status(401).json({message: "Nicht berechtigt"})
    }
    const id = mongoose.Types.ObjectId(userclass._id)
    console.log(id, typeof(id))
    const user = await User.findByIdAndUpdate(req.user.id, {userclass: id}, {new:true})
    if(!user){
        res.status(401).json({message: "Update nicht erfolgreich"})
    }
    console.log(userclass)
    res.status(200).json(user)
    //const toUpdate = await Talent.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    //res.status(200).json(toUpdate)
})

module.exports = {
    getClass, setClass,
    addClass, setAbility
}