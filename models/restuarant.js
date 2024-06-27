let mongoose =require('mongoose')
let restuarantSchema = mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String,

    },
    description:{
        type:String
cd
    },
    image:{
        type:String
    },
    Contact:{
        type:Number
     
    }
  
})

let Restuarant = mongoose.model('Restuarnat',restuarantSchema)
module.exports=Restuarant