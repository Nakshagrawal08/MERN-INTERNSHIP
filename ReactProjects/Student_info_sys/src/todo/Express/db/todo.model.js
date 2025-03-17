import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    Task : String,
    date : String,
    time : String

},{Iscomplete: Boolean , default: false})
export const Todo= mongoose.model('Todo',todoSchema)
