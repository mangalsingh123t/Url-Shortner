
const express = require('express')
const { userSignUp } = require('../controllers/User')
const router = express.Router()

router.post("/", userSignUp)

module.exports = router