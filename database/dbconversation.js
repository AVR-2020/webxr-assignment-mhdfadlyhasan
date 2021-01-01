const { sequelize, DataTypes } = require('./connect')
const User = require('./dbuser')
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

User.hasMany(Conversation, {
  foreignKey: 'id'
})
Conversation.belongsTo(User, {
  as: 'user1',
  foreignKey: 'user_1'
})

Conversation.belongsTo(User, {
  as: 'user2',
  foreignKey: 'user_2'
})
console.log(Conversation === sequelize.models.Conversation ? 'created ' : 'za heck') // true
module.exports = Conversation
