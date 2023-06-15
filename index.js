const express = require("express");
const app = express(); // app is basically a Express application
const router = express.Router();
const port = 5000;
const mongoose = require("mongoose");
const userController = require("./src/controller/userController")

// middleware
app.use(express.json())
app.use('/api/user',userController)

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
        
app.listen(port,async ()=>{
    await connectDb()
    console.log(`Server listening on port : ${port} `)
}) 
