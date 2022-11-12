const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynHandler = require('express-async-handler')
const userModel = require('../model/userModel')



//register user
const registerUser = asynHandler(
    async(request, response) => {
        const { nom, nomEtablissement, motDePasse } = request.body

        if (!nom || !nomEtablissement || !motDePasse) {
            response.status(400)
            throw new Error("les champs sont requis")
        }

        //check if user exists
        const userExists = await userModel.findOne(({ nomEtablissement }))

        if (userExists) {
            response.status(400)
            throw new Error('user already exists')
        }

        //hash password
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hash(motDePasse, salt)


        //create user
        const user = await userModel.create({
            nom,
            nomEtablissement,
            motDePasse: hashPassword
        })

        if (user) {
            response.status(201).json({
                _id: user.id,
                nom: user.nom,
                nomEtablissement: user.nomEtablissement,
                motDePasse: user.motDePasse,
                token: generateToken(user._id)
            })
        } else {
            response.status(400)
            throw new Error('user invalid data')
        }
    }
)



//login user
const loginUSer = asynHandler(
    async(request, response) => {
        const { nomEtablissement, motDePasse } = request.body

        //check nomEtablissement
        const user = await userModel.findOne({ nomEtablissement })
        if (user && (bcrypt.compare(motDePasse, user.motDePasse))) {
            response.status(201).json({
                _id: user.id,
                nom: user.nom,
                nomEtablissement: user.nomEtablissement,
                motDePasse: user.motDePasse,
                token: generateToken(user._id)
            })
        } else {
            response.status(400)
            throw new Error('user not find')
        }
    }
)


//fin user 
const getUser = asynHandler(
    async(request, response) => {
        response.json({ message: "user finded" })
    }

)

//generate JWT
const generateToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_TOKEN, { expiresIn: '30d' }
    )
}


module.exports = { registerUser, loginUSer, getUser }