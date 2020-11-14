const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
var app=express()
app.use(cors())


app.post("/login",function(req,res)
{
    console.log("enterd post")
})

app.get("/login",function(req,res)
{
    console.log("enterd get")
})

app.listen(3000,function()
{
    console.log("Server is running on localhost:3000")
})