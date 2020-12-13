const { sequelize, DataTypes } = require('./connect')
const Follow = sequelize.define('follow', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  following_user: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  to_follow_user: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {})

// `sequelize.define` also returns the model
console.log(Follow === sequelize.models.Follow ? 'created ' : 'za heck') // true
module.exports = Follow
