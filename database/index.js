const { Sequelize } = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DIALECT,
      port: process.env.DB_PORT,
      logging: false,
    }
  )

 async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
    console.log(error)    
    }
  }
  

  const syncModels = async() => {
    try {
     await sequelize.sync({alter: true})
     console.log("sync models succesful")
    } catch (error) {
        console.log(error)
    }
  }


  module.exports = { checkConnection, syncModels, sequelize }
