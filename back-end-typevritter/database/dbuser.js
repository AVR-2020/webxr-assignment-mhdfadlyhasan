const { sequelize, DataTypes } = require('./connect')
const User = sequelize.define('users', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
})
console.log(User === sequelize.models.User ? 'created ' : 'za heck') // true
module.exports = User
