const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database")


const Photo = sequelize.define('photo', {
    image : {
        type: DataTypes.BLOB
    }
})

module.exports = Photo