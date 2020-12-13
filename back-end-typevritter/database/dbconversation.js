const { sequelize, DataTypes } = require('./connect')
const Conversation = sequelize.define('conversation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_1: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_2: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {})
console.log(Conversation === sequelize.models.Conversation ? 'created ' : 'za heck') // true
module.exports = Conversation
