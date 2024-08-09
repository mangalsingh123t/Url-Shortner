
    const express = require('express')
    const router  = express.Router()
    const {generateNewShortUrl, redirectById, getAnalyticsByShortId} =  require("../controllers/Url")
    router.post("/",generateNewShortUrl)
    router.get("/:id",redirectById)
    router.get("/analytics/:id",getAnalyticsByShortId)
    module.exports = router
