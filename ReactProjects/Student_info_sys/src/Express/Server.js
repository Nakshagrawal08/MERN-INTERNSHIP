import express from 'express'
import routes from './routes/students.js'
let app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('hello')
})
app.use("/students",routes)

app.listen(3001,()=>console.log('express working'))