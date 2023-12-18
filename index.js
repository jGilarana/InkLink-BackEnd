const { checkConnection, syncModels } = require("./database")
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
 const setRelations = require("./database/models") 


const app = express()


const connectDB = async() => {
    await checkConnection()
    await syncModels()
    setRelations() 
}

function launchServer() {
    app
      .use(cors()) //permite piticiones de todas las direcciones
      .use(morgan("dev")) //nos muestra las peticiones en consola
      .use(express.json()) // permite leer formato json en el body
      .listen(process.env.PORT, () =>
       console.log(`Server listening on port ${process.env.PORT}`)
      ) //server listening requests
  }

  async function startAPI() {
    launchServer()
    connectDB()

  }

  startAPI()
  