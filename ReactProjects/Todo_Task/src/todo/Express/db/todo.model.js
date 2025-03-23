import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    task : String,
    time : String,
    // date : Date 
    

},{isComplete:true})

export const Todo = mongoose.model('Todo',todoSchema)