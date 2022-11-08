const express = require("express")

const route = require("./route/route")

const connectDB = require("./database/connexion")

const dotenv = require('dotenv')
dotenv.config({ path: "./config/.env" })

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//route
app.use("/", route)



app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})