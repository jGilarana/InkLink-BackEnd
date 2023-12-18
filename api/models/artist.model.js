const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index")

const Artist = sequelize.define('artist', {
name : {
    type: DataTypes.STRING(40),
    allowNull: false
},
lastName : {
    type: DataTypes.STRING(40),
    allowNull: false    
},
email : {
    type: DataTypes.STRING(40),
    allowNull: false
},
telephone : {
    type: DataTypes.INTEGER,
    allowNull: false
}, 
address : {
    type: DataTypes.STRING(40),
    allowNull: false
}, 
latitude: {
    type: DataTypes.DOUBLE(20, 15)
  },
  longitude: {
    type: DataTypes.DOUBLE(20, 15)
  },
  profileImg : {
    type: DataTypes.BLOB
  }
})

module.exports = Artist