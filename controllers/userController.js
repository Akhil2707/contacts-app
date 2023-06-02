const asyncHandler=require('express-async-handler');
const User =require('../models/userModel');
const bcrypt=require('bcrypt');
//@desc register a user
//@route post   /user/register
//@access public
const registerUser = asyncHandler (async(req,res) => {
    const {userName,email,password} = req.body
    if(!userName || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const availableEmail =await User.findOne({email})
    if(availableEmail){
        res.status(400)
        throw new Error("email already taken")
    }

//HashedPassword
const  hashedPassword = await bcrypt.hash(password,10)
console.log("Hashed Password : "  ,hashedPassword)
   const user =await User.create({
    userName,email,password:hashedPassword
   })

   if(user){
    res.status(201).json({_id:user._id,email:user.email})
   }else{
    res.status(400)
    throw new Error("user data is not valid")
   }
})

//@desc login a user
//@route post   /user/login
//@access public
const loginUser = asyncHandler (async(req,res) => {
    const {email, password} =req.body
    if (!email || !password){
        res.status(400)
        throw new Error(' userName and password are required')
    }

    
    res.json({message:"user loggedined successfully"})
})

//@desc get curent login user information
//@route get   /user/current
//@access private
const currentUser = asyncHandler (async(req,res) => {
    res.json({message:"current user information "})
})

module.exports={
    registerUser,
    loginUser,
    currentUser

}
