const express = require("express");
const app = express(); // app is basically a Express application
const port = 5000;
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

app.listen(port,()=>{
    console.log(`Server listening on port : ${port} `)
}) 
