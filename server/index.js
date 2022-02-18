import express from "express";
import bodyParser from 'body-parser'
import cors from "cors"
import port from './router/post.js'
import mongoose  from "mongoose";

const URL='mongodb+srv://huyhiep:huyhiep4520@cluster0.npiwa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app=express()
const PORT = process.env.port||5000
app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
app.use(cors())

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("connect to db");
    })
    .catch((err)=>{
        console.log("err",err);
    })

app.use('/',port)

app.listen(PORT,()=>{
    console.log(`Success with ${PORT}`)
})

