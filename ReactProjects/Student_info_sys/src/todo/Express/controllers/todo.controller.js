import { Todo } from "../db/todo.model.js"

const CreateTodo=async (req,res)=>{
        
        let todoModel = new  Todo(req.body)
        let saved=await todoModel.save()
        if(saved){
            res.send('todo added')
        }
        else{
            res.send('not done')
        }
    }

const GetAll  = async (req,res)=>{
        
       
        let todos=await Todo.find()
        if(todos){
            res.send(todos)
        }
        else{
            res.send('not done')
        }
      
        
    }

const GetById = async (req,res)=>{
    let id= req.params.id
    let todoById = await Todo.findById(id)
    if(todoById){
        res.json(todoById)
    }
    else{
        res.status(404).send('todo not found')
    }
}

const DeleteById = async(req,res)=>{
    let id= req.params.id
    try {
         await Todo.findByIdAndDelete(id)
         res.send('todo deleted')
    } catch(err){
        res.status(500).send('internal error')
     }
}

const UpdateById = async(req,res)=>{
    let id= req.params.id
    try {
        let updateedTodo =await Todo.findByIdAndUpdate(id , req.body)
        if(updateedTodo){
            res.send('todo updated')
        }
        else{
            res.status(404).send('todo not found')
        }
    }
    catch(err){
        console.error('error',err)
    }
}

export default {CreateTodo,GetAll,GetById,DeleteById,UpdateById}