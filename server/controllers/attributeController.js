const asyncHandler = require('express-async-handler')
const Attribute = require('../models/attributesModel')
const User = require('../models/userModel')

const setAttributes = asyncHandler( async (req, res)=>{
    console.log('creating new attribute')
    console.log(req)
    if(!req.user) {
        res.status(400)
        console.log("not authorized...")
        throw new Error('Nicht autorizierd')  
    }

    const attr = await Attribute.create({
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        intelligent: req.body.intelligent,
        vitality: req.body.vitality,    
        stamina: req.body.stamina,  
        charisma: req.body.charisma,  
        mana: req.body.mana,
        spirit: req.body.spirit,
    })
    console.log(attr)
    if(attr){
        const userToUpdate = await User.findById(req.user.id)
        if(userToUpdate){
            userToUpdate.attributes = attr
            const doc = await userToUpdate.save()
            console.log("backend-attribuets were added to user")
            res.status(200).json(doc)
        } else {
            res.status(400)
            throw new Error('Impossible to add info to user')  
        }
    }
})

const getAttributes = asyncHandler( async (req, res)=>{
    console.log('getting attributes for specific user')
    if (!req.user) {
        res.status(400)
        console.log("not authorized...")
        throw new Error('Nicht autorizied') 
    }
    const user = await User.findById(req.user.id)
    if(req.user && user.attributes){
        console.log(`succesfully ${user.attributes}`)
        res.status(200).json(user.attributes)

    } else{
        console.log("attributes are empty")
        console.log({vitality: 0})
        res.status(200).json({vitality: 0})
    }
})

const updateAttributes = asyncHandler(async (req, res)=> {
    console.log('updating attributes')
    // add level check
    
})


module.exports = {
    getAttributes, setAttributes,
}