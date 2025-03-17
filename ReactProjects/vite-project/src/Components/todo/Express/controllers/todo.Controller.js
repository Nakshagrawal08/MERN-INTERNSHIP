import { TodoTask } from "../db/todo.model.js"

const CreateTodoTask=async (req,res)=>{
        
        let taskModel = new  TodoTask(req.body)
        let saved=await taskModel.save()
        if(saved){
            res.send('TodoTask added')
        }
        else{
            res.send('not done')
        }
    }

const GetAll  = async (req,res)=>{
        
       
        let TodoTasks=await TodoTask.find()
        if(TodoTasks){
            res.send(TodoTasks)
        }
        else{
            res.send('not done')
        }
      
        
    }

const GetById = async (req,res)=>{
    let id= req.params.id
    let TodoTaskById = await TodoTask.findById(id)
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
         await TodoTask.findByIdAndDelete(id)
         res.send('TodoTask deleted')
    } catch(err){
        res.status(500).send('internal error')
     }
}

const UpdateById = async(req,res)=>{
    let id= req.params.id
    try {
        let updateedTodoTask =await TodoTask.findByIdAndUpdate(id , req.body)
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

export default {CreateTodoTask,GetAll,GetById,DeleteById,UpdateById}