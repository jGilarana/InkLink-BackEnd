const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database")


const Message = sequelize.define('message', {
    sender : {
        type: DataTypes.STRING(40),
        allowNull: false
    }, 
    receiver : {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    content : {
        type: DataTypes.STRING(1000),
        allowNull: false
    }
})


module.exports = Message 