const express = require('express')
const router = express.Router()
let Restuarant = require('../models/restuarant')

router.post('/restro', async (req,res)=>{
console.log(req.body,"hehe")
try{
    let restuarent = new Restuarant(req.body)
    console.log(restuarent,"hell mai hi hu")
    await restuarent.save()
    return res.send(restuarent)
}
catch(err){
console.log(err,"hiii")
return res.sendStatus(402).send(err)
}
})


//   get all Restraurant 
router.get('/restro',  async (req,res)=>{  

    try{
        let restraurant=  await Restuarant.find()
        if(!restraurant){

         return  res.send('restraurant not foundddd')
          
        }
        else{
            res.send(restraurant)
        }

    }
    catch{

    }

 })


 router.get('/restro/:id',  async (req,res)=>{
     try{
        let restraurant=    await   Restuarant.findById(req.params.id)
        if(!restraurant){
           return res.status(404).send('not founddddd')

        }
        else{
            return res.send(restraurant)
        }

     }
     catch{
        res.send('err')
     }
         
 })

 //  update restraurant
router.patch('/restro/:id',   async(req,res)=>{
    try{
        let restraurant=      await Restuarant.findByIdAndUpdate(req.params.id, req.body, {new:true})
         if(restraurant){
            res.send(restraurant)
         }
         else{
            return res.send('not foundddddd not updateddddd')
         }
    }
    catch (err){
        console.log('errr' ,  err);
    }      

} )



router.delete('/restro/:id', async(req,res)=>{

    try{
        let restraurant=   await  Restuarant.findByIdAndDelete(req.params.id, {new:true})
        if(!restraurant){
           res.send('not founddd')
        }
        else{
          return res.send('deleteddd')
        }

    }
    catch{
       return  res.send('errrrrr')
    }

       

})



module.exports = router