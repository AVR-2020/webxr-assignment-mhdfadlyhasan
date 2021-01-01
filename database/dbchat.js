const { sequelize, DataTypes } = require('./connect')
const User = require('./dbuser')
const Chat = sequelize.define('chat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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

User.hasMany(Chat, {
  foreignKey: 'id'
})
Chat.belongsTo(User, {
  foreignKey: 'user_sender'
})

console.log(Chat === sequelize.models.Chat ? 'created ' : 'za heck') // true
module.exports = Chat
