import { postModule } from "../module/post.js"

export const getPost=async (req,res)=>{
    try {
        const posts= await postModule.find()
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json({error: err})
    }
}
export const creatPost=async (req,res)=>{
    try {
        const data=req.body
        const posts= new postModule(data)
        await posts.save()
        res.status(200)
    }
    catch (err) {
        res.status(500).json({error: err})
    }
}
export const getIdUpdate= async (req,res)=>{
    try {
        const idUpdate=req.params.id
        const data=await postModule.findOne({_id:idUpdate})
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({error: err})
    }
}
export const updatePost=async (req,res)=>{
    try {
        const updateData=req.body
        const idUpdate=req.params.id
        const posts= await postModule.findByIdAndUpdate(idUpdate,updateData)
        res.status(200).json(posts)
        console.log(updateData);
    }
    catch (err) {
        res.status(500).json({error: err})
    }
}
export const deletePost=async (req,res)=>{
    try {
        const idUpdate=req.params.id
        const posts= await postModule.findByIdAndRemove(idUpdate)
        res.status(200).json(posts)
    }
    catch (err) {
        res.status(500).json({error: err})
    }
}