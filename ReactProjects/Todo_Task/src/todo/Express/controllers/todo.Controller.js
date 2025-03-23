import { Todo } from "../db/todo.model.js"


const CreatTask = async (req,res)=>{
    let TaskModel = new Todo(req.body)
    let saved = await TaskModel.save()
    if(saved){
        res.send('added')
    }
    else{
        res.send('not added')
    }
}
const GetAll  = async (req,res)=>{
        
       
        let TodoTasks=await Todo.find()
        if(TodoTasks){
            res.send(TodoTasks)
        }
        else{
            res.send('not done')
        }
      
        
    }

const GetById = async (req,res)=>{
    let id= req.params.id
    let TodoTaskById = await Todo.findById(id)
    if(TodoTaskById){
        res.json(TodoTaskById)
    }
    else{
        res.status(404).send('TodoTask not found')
    }
}

const DeleteById = async(req,res)=>{
    let id= req.params.id
    try {
         await Todo.findByIdAndDelete(id)
         res.send('TodoTask deleted')
    } catch(err){
        res.status(500).send('internal error')
     }
}

const UpdateById = async(req,res)=>{
    let id= req.params.id
    try {
        let updateedTodoTask =await Todo.findByIdAndUpdate(id , req.body)
        if(updateedTodoTask){
            res.send('TodoTask updated')
        }
        else{
            res.status(404).send('TodoTask not found')
        }
    }
    catch(err){
        console.error('error',err)
    }
}

export default {GetAll,GetById,DeleteById,UpdateById,CreatTask}