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
  foreignKey: 'user_sender'
})
Chat.belongsTo(User, {
  foreignKey: 'id'
})

console.log(Chat === sequelize.models.Chat ? 'created ' : 'za heck') // true
module.exports = Chat
