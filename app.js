const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())
app.use(cors())

application.listen(3001,()=>{
    console.log("Server Running")
})