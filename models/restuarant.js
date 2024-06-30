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

    },
    image:{
        type:String
    },
    contact:{
        type:Number
    }
  
})

let Restuarant = mongoose.model('Restuarnat',restuarantSchema)
module.exports=Restuarant