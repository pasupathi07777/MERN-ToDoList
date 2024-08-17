const mongoose = require('mongoose')
const schema=new mongoose.Schema(
    {
        taskName:{
            type:"string",
            required:true
        },
        taskDescription:{
            type:"string",
            required:true 
        },
    }
)

const model=mongoose.model("activity",schema,"pasupathi_activity")

module.exports=model