const http = require('http')
const filesys = require('fs')
// variable = kisi module ko import krne k liye require k under library ka naam likhna hoga
const Server =http.createServer((req , res)=>{
  // res.statusCode=200 
  // //respond ka status 200 mtlb successfull
  
    res.writeHead(200,{
      "content-type":"text/html"
    })
    res.write('hello node ')
    switch(req.url){
      case '/':
        filesys.readFile('text.txt','utf-8',(error , data)=>{
          if (error){
            res.write('wrong')
          }
          else if(data) {
            console.log(data)
            res.write(data)

          }
        })
        res.write('<h1>Home page</h1>')
        break
      case '/about':
        res.write('<h1>about</h1>')
        break
      case '/contact':
        res.write('<h1>contact</h1>')
        break}
    res.end()
    return res
})

// server variable bna k module wale variable ko .createserver method lga k ("server 2 kaam krta h REQUEST leke kaam kr k RESPONSE deta h " by arrow function)
Server.listen(5000,()=>{
    console.log('server started')
})

//server ko start krne k liye .listen method use kr k brackets me code number aur arrow function
