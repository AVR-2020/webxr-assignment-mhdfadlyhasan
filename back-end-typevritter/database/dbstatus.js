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
console.log(User)
User.hasMany(Status, {
  foreignKey: 'status_sender'
})
Status.belongsTo(User, {
  foreignKey: 'id'
})
// `sequelize.define` also returns the model
console.log(Status === sequelize.models.Status ? 'created ' : 'za heck') // true
module.exports = Status
