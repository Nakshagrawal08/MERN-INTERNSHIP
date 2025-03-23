import express from 'express'
let routes = express.Router()
import Todo from '../controllers/todo.Controller.js'
routes.route("")

    .post(Todo.CreatTask)
    .get(Todo.GetAll)

routes.route("/:id")
   
    .get(Todo.GetById)
    .delete(Todo.DeleteById)
    .put(Todo.UpdateById)

export default routes