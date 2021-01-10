// connect to postgresql
const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()
// eslint-disable-next-line no-undef
const connectionString = process.env.DATABASE_URL
const sequelize = new Sequelize(connectionString, {
  define: {
    timestamps: false
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})
try {
  sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
module.exports = {
  sequelize,
  DataTypes
}
