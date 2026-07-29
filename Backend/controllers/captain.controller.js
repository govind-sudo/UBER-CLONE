const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const {validationResult} = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerCaptain = async (req,res,next)=>{
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors:err.array()})
    }

    const {fullname,email,password,vehicle} = req.body
    const {firstname,lastname} = fullname
    const {color,plate,capacity,vehicleType} = vehicle

    const isCaptainExits = await captainModel.findOne({email})

    if(isCaptainExits){
        return res.status(400).json({message:'captain already exits'})
    }
    
    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainService.createCaptain({firstname, lastname,email,password:hashedPassword,color,plate,capacity,vehicleType})

    const token = captain.generateAuthToken()

    res.status(201).json({token,captain})
}

module.exports.loginCaptain = async (req,res,next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email,password} = req.body

    const captain = await captainModel.findOne({email}).select('+password');              //select islye kiya taki is quesry me password include ho sake

    if(!captain){
        return res.status(401).json({message:'Invalid email or password'})
    }

    const isMatch = await captain.comparePassword(password)

     if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'})
    }

    const token = captain.generateAuthToken()

    res.cookie('token',token)

    res.status(200).json({token, captain})
}

module.exports.getCaptainProfile = async(req,res,next)=>{
    res.status(200).json(req.captain)
}

module.exports.logoutCaptain = async(req,res,next)=>{
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }
    await blacklistTokenModel.create({
        token,
    })
    
    res.clearCookie('token')
    res.status(200).json({message:"Logged Out"})
}