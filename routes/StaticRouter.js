
const express = require('express')
const staticRouter  = express.Router()
const {getAllUrls} = require("../controllers/Url")
staticRouter.get("/",getAllUrls)
staticRouter.get("/signUp",(req,res)=>{
    res.render("signUp")
 }
 )
staticRouter.get("/login",(req,res)=>{
    res.render("login")
 }
 )
module.exports = staticRouter
