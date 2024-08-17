const express=require('express')
const route=express.Router()
const {getTask,postTask,patchTask,deleteTask}=require('../controler/taskControler')


route.get("/",getTask)
route.post("/",postTask)
route.put("/:id",patchTask)
route.delete("/:id",deleteTask)


module.exports=route
