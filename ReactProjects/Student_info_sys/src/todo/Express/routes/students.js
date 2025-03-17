import express from 'express'
import { Student } from '../db/student.model.js'
let routes = express.Router()
import StudentController from '../controllers/student.controller.js'

// var students = [
//     {id:1,name:'Rahul',age:21},
//     {id:2,name:'Rohit',age:22},
//     {id:3,name:'Raj',age:23}
// ]

routes.route("")
    // .get((req,res)=>{
    //     res.json(students)
    // })
    // .post((req,res)=>{
        // let studentdata=req.body
        // students.push(studentdata)
        
        // let studentModel = new  Student(req.body)
        // studentModel.save()
        // .then((value)=>{
        //     res.send("value")
        // }).catch((err)=>{
        //     res.status(500).send('save of failed')
        // })
        
    // })
    .post(StudentController.CreateStudent)
      
        
    .get(StudentController.GetAll)

routes.route("/:id")
   
    .get(StudentController.GetById)
    .delete(StudentController.DeleteById)
    .put(StudentController.UpdateById)

    // .get((req,res)=>{
    //     let id= req.params.id
    //     // let found = students.find((value)=>value.id==id)
    //     // res.json(found)
    // })

    // .delete((req,res)=>{
    //     let id= req.params.id
    //     let index = students.findIndex((value)=>value.id==id)
    //     students.splice(index,1)
    //     res.json(students)
    // })

    // .put((req,res)=>{
    //     let id= req.params.id
    //     // let index = students.findIndex((value)=>value.id==id)
    //     // students[index]=req.body
    //     // res.json(students[index])
    // })
    
export default routes