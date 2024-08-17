const mongoose = require('mongoose')
const database = 'pasupathi_activity'
require('dotenv').config({path:'./config/.env'})


const dataBase = () => {
     return mongoose.connect(`${process.env.MONGO_URI}/bulk`)
     .then((e) => {
            console.log("DataBase connected")
            return true
        }).catch((e) => {
            console.log("DataBase not connected") 
            return false
            
        })


}

module.exports = {dataBase}