const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Talent = require('../models/talentModel')
const UserTalents  = require('../models/userTalentsModel')
const { Types } = require('mongoose')

// @desc Register new User
// @route POST /users/
// @access Public
const registerUser =  asyncHandler( async (req, res) => {
    const {name, pwd, check} = req.body
    console.log(name, pwd, check)
    if(!name || !pwd || !check){
        res.status(400)
        throw new Error('Bitte sowohl den Namen als auch zweimal das Passwort eingeben')
    } else if (pwd !== check){
        res.status(400)
        throw new Error('Bitte überprüfe deine Passwortseingabe!')
    }
    //check if User already exist (by name)
    const findUser = await User.findOne({name})
    if(findUser){
        res.status(400)
        throw new Error('Bitte einen anderen Namen wählen!')
    }
    // Hash pwd
    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(pwd, salt)
    console.log(hashedPwd)
    // Create user
    const user = await User.create({
        //_id: user.id,
        name, 
        pwd: hashedPwd,
        //token: generateToken(user._id)
    })
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name, 
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Bitte überprüfe deine Passwortseingabe!')
    }
})



// @desc Authenticate a user
// @route POST /users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const {name, pwd} = req.body

    const user = await User.findOne({name})
    if(user && (await bcrypt.compare(pwd, user.pwd))){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            token: generateToken(user._id),

        }) 
    }else {
        res.status(400)
        throw new Error('Falsche Eingabe!')
        }
    
    
})


const setUserTalent = asyncHandler(async (req, res)=>{
    if(!req.body.point || !req.body.name){
        res.status(400)
        throw new Error('Bitte überprüfe deine Eingabe!')
    }
    //find talent by name
    const talent = await Talent.find({name: req.body.name})
    if(talent){
        const talentId = Types.ObjectId(talent._id)
        console.log(talentId)
        const userTalent = await UserTalents.create({
            talent: talentId,
            points: req.body.point,
        })
        console.log(Types.ObjectId(userTalent._id))
        if(userTalent){
            const userToUpdate = await User.findById(req.user.id)
            if(userToUpdate){
                userToUpdate.talents.push(
                    {talents: userTalent,
                    })
                res.status(201).json(userToUpdate)
            }
           
        }
    }

})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d',})
}

module.exports = {
    registerUser,loginUser, setUserTalent,
}