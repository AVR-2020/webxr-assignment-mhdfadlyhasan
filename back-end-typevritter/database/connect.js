//connect to postgresql
const { Sequelize , DataTypes } = require('sequelize');
require('dotenv').config()
var connectionString = process.env.DATABASE_URL
const sequelize = new Sequelize(connectionString, {
  define:{
    timestamps: false
  }
})
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
module.exports = {
  sequelize,
  DataTypes
}
