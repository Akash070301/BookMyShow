const User = require('../model/userModel')

const createUser = async(req,res)=>{
    try{
        const userExists = await User.findOne({email:req.body.email})
        if(userExists){
            return res.send({
                success:false,
                message:"User already exists"
            })
        }
        const newUser = await User(req.body)
        await newUser.save()
        res.send({
            success:true,
            message:"User registered sucessfully, please login to continue"
        })

    }
    catch(err){
        console.log("Error in user registration", err)
        res.send({
            success:false,
            message:"Error occured while registering user, please try again"
        })
    }
}

const userLogin = async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.send({
                success:false,
                message:"User doesn't exist, please reigster to continue"
            })
        }
        //User exists, now check for password
        if(user.password !== req.body.password){
            res.send({
                success: false,
                message: "Incorrect password"
            })
        }
        res.send({
            success:true,
            message: "Loggin sucessful"
        })

    }
    catch(err){
        console.log("Error logging in", err)
        res.send({
            success:false,
            message:"Error logging in, please try again"
        })
    }
}

module.exports = {createUser, userLogin}