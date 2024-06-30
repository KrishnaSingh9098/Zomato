let mongoose =require('mongoose')
let productSchema = mongoose.Schema({
    name : {
        type : String
    },
    description:{
        type:String

    },
    price:{
        type:number
    },
    image: {
        type:String
    }
})

let Product = mongoose.model("product",productSchema)
module.exports=Product
