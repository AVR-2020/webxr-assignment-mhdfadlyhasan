const { sequelize, DataTypes } = require('./connect')
const Chat = sequelize.define('chat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_sender: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  conversation: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {})
console.log(Chat === sequelize.models.Chat ? 'created ' : 'za heck') // true
module.exports = Chat
