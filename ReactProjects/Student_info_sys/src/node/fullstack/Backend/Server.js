
import http ,{createServer} from 'http'
import dotenv from 'dotenv'
import { json } from 'stream/consumers'
dotenv.config()

var students = [
    {id:1,name:'Rahul',age:21},
    {id:2,name:'Rohit',age:22},
    {id:3,name:'Raj',age:23}]
let Server = createServer((request,response)=>{
    response.writeHead(200,{'content-type':'application/json',
        "access-control-allow-origin":"*",
    })
    if(request.url=='/students'&&request.method=='GET'){
        response.write(JSON.stringify(students))
        response.end()
    }
    else if(request.url=='/students'&&request.method=='POST'){
       let finalData=''
       request.on('data',(chunks)=>{
        finalData = chunks.toString()
       }),
       request.on('end',()=>{
        let studentsObjects = JSON.parse(finalData)
        students.push(studentsObjects)
        response.write('student added')
        response.end()
       })
    }
})
Server.listen(process.env.PORT,()=>{
    console.log('Server is running on port '+process.env.PORT);
    
})