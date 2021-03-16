import postMessage from '../models/postMessage.js'
export const getPost=(req,res)=>{
    
}

export const createPost=async(req,res)=>{
    const post=req.body
    const newPost=new postMessage(post)

    try {
       await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        
    }
}