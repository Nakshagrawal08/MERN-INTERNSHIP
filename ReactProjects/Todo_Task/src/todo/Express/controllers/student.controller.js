import { Student } from "../db/student.model.js"

const CreateStudent=async (req,res)=>{
        
        let studentModel = new  Student(req.body)
        let saved=await studentModel.save()
        if(saved){
            res.send('student added')
        }
        else{
            res.send('not done')
        }
    }

const GetAll  = async (req,res)=>{
        
       
        let students=await Student.find()
        if(students){
            res.send(students)
        }
        else{
            res.send('not done')
        }
      
        
    }

const GetById = async (req,res)=>{
    let id= req.params.id
    let studentById = await Student.findById(id)
    if(studentById){
        res.json(studentById)
    }
    else{
        res.status(404).send('student not found')
    }
}

const DeleteById = async(req,res)=>{
    let id= req.params.id
    try {
         await Student.findByIdAndDelete(id)
         res.send('student deleted')
    } catch(err){
        res.status(500).send('internal error')
     }
}

const UpdateById = async(req,res)=>{
    let id= req.params.id
    try {
        let updateedStudent =await Student.findByIdAndUpdate(id , req.body)
        if(updateedStudent){
            res.send('student updated')
        }
        else{
            res.status(404).send('student not found')
        }
    }
    catch(err){
        console.error('error',err)
    }
}

export default {CreateStudent,GetAll,GetById,DeleteById,UpdateById}