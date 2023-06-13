const express = require("express");
const app = express(); // app is basically a Express application
const port = 5000;
const mongoose = require("mongoose");
 //    http operations : adding new data ( POST ), fetching data ( GET ), update some data ( PUT ) , delete data ( DELETE )

app.get("/api/:id",(req,resp)=>{  
    console.log("Request params : ",req.params['id'])    
    console.log("Control is here : GET")
    resp.send(`Test Response Data : ${req.params['id']}`)
})

app.post("/api",(req,resp)=>{    //    http operations : adding new data ( POST ), fetching data ( GET ), update some data ( PUT ) , delete data ( DELETE )
    console.log("Control is here: POST")
})

app.put("/api",(req,resp)=>{    //    http operations : adding new data ( POST ), fetching data ( GET ), update some data ( PUT ) , delete data ( DELETE )
    console.log("Control is here: PUT")
})

app.delete("/api",(req,resp)=>{    //    http operations : adding new data ( POST ), fetching data ( GET ), update some data ( PUT ) , delete data ( DELETE )
    console.log("Control is here: DELETE")
})

const db_url = "mongodb+srv://Shuvam123:hHUoznjJzfgg2J7h@practicecluster.kalpnxs.mongodb.net/?retryWrites=true&w=majority"

async function connectDb(){
    try{
        await mongoose.connect(db_url)
        console.log("Connection successful")
    }
    catch(err){
        console.log(err)
    }
} 


        // .then((err)=>{
        //     if(err)
        //       console.log("Error :", err);
        //     else  
        //       console.log("Database connected")
        // })
            
        

app.listen(port,()=>{
    connectDb()
    console.log(`Server listening on port : ${port} `)
}) 
