
const express = require('express')
const staticRouter  = express.Router()
const {getAllUrls} = require("../controllers/Url")
staticRouter.get("/",getAllUrls)

module.exports = staticRouter
