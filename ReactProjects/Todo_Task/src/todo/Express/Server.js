import express from 'express'
import routes from './routes/todotask.js'
import { connect } from 'mongoose'
import { connectDB } from './db/Connection.js'

let app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('hello')
})
app.use("/todo",routes)
connectDB().then(()=>{
app.listen(3000,()=>console.log('server started at ',3000))
}).catch(err =>{
    console.log('error',err)
})

app.listen(3001,()=>console.log('express working'))