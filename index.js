const express = require("express");
const app = express(); // app is basically a Express application
const port = 5000;
const mongoose = require("mongoose");
const User = require("./src/models/userSchema");

// middleware
app.use(express.json())
// app.use((req,resp,next)=>{
//     console.log("Inside middleware : ",req.headers["content-type"] )
//    if(req.headers["content-type"] == "application/json") 
//       next()
//    else
//       resp.send("Bad Request")
// })
 //    http operations : adding new data ( POST ), fetching data ( GET ), update some data ( PUT ) , delete data ( DELETE )
 // MVC - > ( MODEL VIEW CONTROLLER)
app.get("/api/:id",async (req,resp)=>{  
   try{
    console.log("Request params : ",req.params['id'])    
    console.log("Control is here : GET")
    let fetchedUser = await User.findById(req.params.id)

    resp.json(fetchedUser)
   }
   catch(err){
    console.log(err)
    resp.send("Bad Request")
   }
    
})

app.post("/api/user", async (req,resp)=>{    //    http operations : adding new data ( POST ), fetching data ( GET ), update some data ( PUT ) , delete data ( DELETE )
    try{
        console.log("Control is here: POST")
        console.log("Request body ",req.body)
        let user = new User(req.body)
        let savedUser = await user.save();
        console.log("User added successfully")
        resp.json(savedUser)

    }
    catch(err){
        console.log(err)
    }                                  
    
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
            
        

app.listen(port,async ()=>{
    await connectDb()
    console.log(`Server listening on port : ${port} `)
}) 
