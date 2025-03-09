const http = require('http')
const filesys = require('fs')
const Server =http.createServer((req , res)=>{
    if(req.url =='/'){
        fs.readfile('index.html'.utf-8,(erro,data)=>{
            res.write(data)
            res.end()
        })
    }
    else if(req.url =='/home'){
        fs.readfile('index.html'.utf-8,(erro,data)=>{
            res.write(data)
            res.end()
        })
    }
    else if(req.url =='/home'){
        fs.readfile('index.html'.utf-8,(erro,data)=>{
            res.write(data)
            res.end()
        })
    }
    else if(req.url =='/home'){
        fs.readfile('index.html'.utf-8,(erro,data)=>{
            res.write(data)
            res.end()
        })
    }
    else if(req.url =='/home'){
        fs.readfile('index.html'.utf-8,(erro,data)=>{
            res.write(data)
            res.end()
        })
    }
})