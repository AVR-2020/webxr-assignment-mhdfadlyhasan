const { sequelize, DataTypes } = require('./connect')
const User = require('./dbuser')
const Status = sequelize.define('statuses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {})
User.hasMany(Status, {
  foreignKey: 'id'
})
Status.belongsTo(User, {
  foreignKey: 'status_sender'
})
// `sequelize.define` also returns the model
console.log(Status === sequelize.models.Status ? 'created ' : 'za heck') // true
module.exports = Status
