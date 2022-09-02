/************************************/
/*** Import des modules nécessaires */
const { Sequelize } = require('sequelize')

/************************************/
/*** Connexion à la base de données */
let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)
/*** Mise en place des relations */
const db = {} // une constante {objet} qui représentera la bdd

db.sequelize = sequelize // On y range sequelize

/*********************************/
/*** Synchronisation des modèles */
// db.sequelize.sync({alter: true})

module.exports = db