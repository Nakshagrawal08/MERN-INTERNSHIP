import express from 'express'
import routes from './routes/Todo.js'
import { connectDB } from './db/Connection.js'

let app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('hello')
})
app.use("/todo",routes)
connectDB().then(()=>{
app.listen(3008,()=>console.log('server started at ',3008))
}).catch(err =>{
    console.log('error',err)
})





