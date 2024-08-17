const express = require('express')
const corn = require('cors')
const {dataBase}=require('./config/db')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(corn())
require('dotenv').config({path:"./config/.env"})
const route =require('./route/taskRout')




const connectingDB=dataBase
connectingDB()
.then((e)=>{
    console.log(e)
    app.listen(process.env.PORT,()=>{
        console.log("server started"+process.env.PORT)
       
    })

}).catch((e)=>{
    console.log(e)
})

app.use("/tasks",route)
   

















