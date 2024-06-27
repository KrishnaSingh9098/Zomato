const express = require('express')
const router = express.Router()
let Restuarant = require('../models/restuarant')

router.post('/restro', async(req,res)=>{
console.log(req.body,"hehe")
try{
    let restuarent = new Restuarant(req.body)
    await restuarent.save()
    return res.send(201).send(restuarent)
}
catch(err){
console.log(err,"hiii")
return res.send(402).send(err)
}
})


module.exports = router