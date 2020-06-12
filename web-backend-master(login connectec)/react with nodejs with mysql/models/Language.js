const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'language',
  {
    lang_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull:false,
      autoIncrement: true
    },
    
    language_type: {
        type: Sequelize.STRING,
        allowNull:true
    }
  },
  {
    timestamps: false
  }
)