import express from 'express'
import {getPost,creatPost,updatePost,getIdUpdate,deletePost} from '../controller/post.js'

const routerAdmin=express.Router()

routerAdmin.get('/post',getPost)
routerAdmin.post('/post',creatPost)
routerAdmin.get('/update/:id',getIdUpdate)
routerAdmin.post('/update/:id',updatePost)
routerAdmin.get('/delete/:id',deletePost)

export default routerAdmin