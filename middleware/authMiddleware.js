const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/user.model')

const protect = asyncHandler(async (req,res, next) =>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //Get token from header
            token = req.headers.authorization.split(' ')[1]

            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token
            req.user = await UserModel.findById(decoded.userId).select('-password')

            next()

        } catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        } 
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized and no token')
    }

})

module.exports = {protect}