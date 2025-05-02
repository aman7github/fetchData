const express = require('express')
const fs = require('fs')
require('dotenv').config()
const app= express()

app.get('/getTimeStories',(req,res)=>{

  fs.readFile('./db.json',"utf-8",(err,data)=>{
    
    if(data){
        try{
          let stories = JSON.parse(data)
          res.status(200).send(stories)
        }catch(err){
             res.status(400).send({"err":err})
        }

    }else{
       res.status(400).send({"err":err})
    }

  })

})
 
app.listen(process.env.PORT,()=>{
    console.log('server is connected');
    
})






