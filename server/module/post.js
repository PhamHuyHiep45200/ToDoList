import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    }
},{timestamps:true})

export const postModule=mongoose.model('Post',schema)