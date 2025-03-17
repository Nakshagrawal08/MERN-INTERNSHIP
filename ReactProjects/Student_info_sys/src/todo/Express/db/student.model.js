import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    name : String,
    surname : String,
    rollno : Number

},{timestamps:true})
export const Student= mongoose.model('Student',studentSchema)
