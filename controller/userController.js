const { request, response } = require("express")

//register user
const registerUser = (request, response) => {
    response.json({ message: "user registed success" })
}


//login user
const loginUSer = (request, response) => {
    response.json({ message: "user login success" })
}

//fin user 
const getUser = (request, response) => {
    response.json({ message: "user finded" })
}



module.exports = { registerUser, loginUSer, getUser }