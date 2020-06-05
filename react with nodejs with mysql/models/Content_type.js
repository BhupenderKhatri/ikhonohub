const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'content_type',
  {
    cpntent_type_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content_types_data: {
        type: Sequelize.VARCHAR(45),
        primaryKey: true,
        autoIncrement: true,
        allowNull:true
      }
  },
  {
    timestamps: false
  }
)