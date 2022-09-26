const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const General = require('../models/generalModel')

// Get general ibfo

const getGeneral = asyncHandler( async (req, res) => {
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(400)
        throw new Error("User not found")        
    }
    if(user.general){
        console.log('general info already added')
        res.status(200).json(user.general)
    }  else {
        res.status(200).json({age:0, haircolor:''})
    }
    
})


// Create general info for a User
const createGeneral = asyncHandler( async (req, res) => {
     if(!req.body.age){
        res.status(400)
        throw new Error("Falsch! Das Feld darf nicht leer sein")
    }
    const gen = await General.create({
        kind: req.body.kind,
        age: req.body.age,
        haircolor: req.body.haircolor,
        sex: req.body.sex,
        eyecolor: req.body.eyecolor,
        origin: req.body.origin,
        more: req.body.more,
        haircut: req.body.haircut
    }) 
    console.log(gen)
    const usertoUpdate = await User.findById(req.user.id)
    if(gen && usertoUpdate){
        console.log(usertoUpdate)
        usertoUpdate.general = gen
        const doc = await usertoUpdate.save()
        res.status(200).json(doc)
    } else {
        console.log('error by creating collections')
        res.status(400)
        throw new Error("Falsch! Das Feld darf nicht leer sein")
    }
     
})

module.exports = {
    getGeneral, createGeneral,
}