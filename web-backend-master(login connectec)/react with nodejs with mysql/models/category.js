const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'category',
  {
    cate_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cate_type: {
      type: Sequelize.STRING(45)
    }
  },
    {
      timestamps: false
    }
)
