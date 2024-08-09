 const mongoose = require('mongoose')

 async function connectMongodb(url){
       mongoose.connect(url)
       .then(()=>console.log("Mongodb is Connected Succesfully"))
       .catch((err)=>console.log("Could not Connect with Mongodb ",err))
 }


 module.exports =  connectMongodb