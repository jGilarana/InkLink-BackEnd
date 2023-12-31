const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database")

const User = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImg: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.ENUM('user', 'admin', 'bussiness'),
        defaultValue: 'user'
      }
    })


    module.exports = User