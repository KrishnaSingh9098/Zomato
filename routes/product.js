const express = require('express')
const Product = require('../models/product')
const router = express()

router.post('/product', async(req,res)=>{
    try{
        let product = new Product(req.body)
      await product.save()
      return res.send(product)
    }
    catch(err){
console.log(err,"yhi per hai")
return res.sendStatus(402).send(err)

    }
})





















