import mongoose from 'mongoose'

const postSchema=mongoose.Schema({
    title:String,
    price:Number,
    location:String,
})

const postMessage=mongoose.model('aircns',postSchema)

export default postMessage;