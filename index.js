let express = require('express')
let app = express()

let mongoose = require('mongoose')
let userRoutes = require ('./routes/user')
let loginRoutes = require('./routes/login')
mongoose.connect('mongodb://127.0.0.1:27017/user')

app.use(express.json())
app.use('/api',userRoutes)
app.use('/api',loginRoutes)
app.listen(5000,()=>{
    console.log('hello brother')
})

// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6./routes