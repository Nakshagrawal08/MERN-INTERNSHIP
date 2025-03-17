import express from 'express'
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
    .post(TodoController.CreateTodo)
      
        
    .get(TodoController.GetAll)

routes.route("/:id")
   
    .get(TodoController.GetById)
    .delete(TodoController.DeleteById)
    .put(TodoController.UpdateById)

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
    