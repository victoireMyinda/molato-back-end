const express = require('express')
const router = express.Router()

const { registerUser, loginUSer, getUser } = require("../controller/userController")

//api user 
router.post("/", registerUser)
router.post("/login", loginUSer)
router.get("/getUser", getUser)






module.exports = router