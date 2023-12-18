const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database")

const Tattoo = sequelize.define('tattoo', {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image : {
        type: DataTypes.BLOB
    }
})

module.exports = Tattoo