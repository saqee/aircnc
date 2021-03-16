import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'

const app=express()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())



app.use('/posts',postRoutes)
const uri = "mongodb+srv://saqeeb:saqeeb@cluster0.euyqv.mongodb.net/air?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(3001,()=>{
console.log('server run on 3001');
}))