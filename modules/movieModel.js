const mongoose=require("mongoose")

const movieSchema=new mongoose.Schema(
    {
        url: String,
        name: String,
        rating: String
    }
)

module.exports=mongoose.model("movie",movieSchema)