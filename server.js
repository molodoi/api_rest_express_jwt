/************************************/
/*** Import des modules nécessaires */
const express = require('express')
const cors = require('cors')

/************************************/
/*** Import de la connexion à la DB */
let DB = require('./db.config')

/*****************************/
/*** Initialisation de l'API */
const app = express()

/*****************************/
/*** On paramètre cors */
app.use(cors()) // Le middelware cors

app.use(express.json()) // Notre API va parler en json
app.use(express.urlencoded({ extended: true })) // activation de encodage d'url  

/******************************/
/*** Les routes */
app.get('/', (req, res) => res.send(`All is OK !`))
app.get('*', (req, res) => res.status(501).send('Not Implemented !'))


/********************************/
/*** Start serveur avec test DB */
DB.sequelize.authenticate()
    .then(() => console.log('Database connection OK'))
    .then(() => {
        /*** Start serveur */
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server is running on port ${process.env.SERVER_PORT}. Well done !`)
        })
    })
    .catch(err => console.log('Database Error', err))