import express from "express"

const app = express ();

 app.get("/", (req,res)=>{
    res.send(" CI/CD WITH NODE JS");
 })

 app.listen (3000 , ()=>{
    console.log(" THE SERVER IS RUNNING ON PORT 3000")
 })

 