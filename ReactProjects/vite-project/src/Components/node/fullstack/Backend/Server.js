
import http ,{createServer} from 'http'
import dotenv from 'dotenv'
dotenv.config()

var students = [
    {id:1,name:'Rahul',age:21},
    {id:2,name:'Rohit',age:22},
    {id:3,name:'Raj',age:23}]
let Server = createServer((request,response)=>{
    response.writeHead(200,{'content-type':'application/json'})
    if(request.url=='/students'&&request.method=='GET'){
        response.write(JSON.stringify(students))
        response.end()
    }
})
Server.listen(process.env.PORT,()=>{
    console.log('Server is running on port '+process.env.PORT);
    
})