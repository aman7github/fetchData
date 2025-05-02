
const http = require('http');
const fs = require('fs')



const server = http.createServer((req,res)=>{

 if(req.url==='/getTimeStories' && req.method==="GET"){

  fs.readFile('./db.json',"utf-8",(err,data)=>{
    
    if(data){
        try{
          let stories = JSON.parse(data)
      
          res.end(JSON.stringify(stories))
        }catch(err){
             res.end(JSON.stringify({"err":err}))
        }

    }else{
       res.end(JSON.stringify({"err":err}))
    }

  })


 }else{
  res.end(JSON.stringify({"err":"wrong url or wrong method"}))

 }


})
 


server.listen(3000,()=>{
    console.log('server is connected');
    
})






