const express = require('express')
let router = express.Router()

let bcrypt = require('bcrypt')
const User = require('../models/user')

router.get('/',(req,res)=>{
    res.send("hehehe")
})
router.post('/users',async(req,res)=>{
    const user =req.body
    console.log(user,"heheeh")
    const Email = await User.findOne({ email:user.email})
    if(Email){
        res.send('user is already register')
    }
    else{
        user.passWord= await bcrypt.hash(req.body.passWord,10)
        const dbUser = new User({
            name :user.name,
            email : user.email.toLowerCase(),
            passWord : user.passWord
        })
        await dbUser.save()
        res.send('user acc should be Created')
    }

 
  
})


module.exports= router