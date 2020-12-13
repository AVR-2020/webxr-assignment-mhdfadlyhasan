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
  // Other model options go here
})
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User ? 'created ' : 'za heck') // true
// user_baru.save()
module.exports = User
