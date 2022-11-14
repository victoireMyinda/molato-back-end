const express = require("express")

const clientRoute = require("./route/clientRoute")
const userRoute = require("./route/userRoute")

const connectDB = require("./database/connexion")

const dotenv = require('dotenv')
dotenv.config({ path: "./config/.env" })

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//route
app.use("/api/client", clientRoute)
app.use("/api/user", userRoute)



app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})