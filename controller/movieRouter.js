const express=require("express")
const movieModel = require("../modules/movieModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let movie=new movieModel(data)
    let result=await movie.save()
    res.json({
        status:"success"
    })
})

module.exports=router