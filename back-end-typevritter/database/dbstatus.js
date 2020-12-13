const { sequelize, DataTypes } = require('./connect')
const Status = sequelize.define('statuses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status_sender: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {})

// `sequelize.define` also returns the model
console.log(Status === sequelize.models.Status ? 'created ' : 'za heck') // true
module.exports = Status
