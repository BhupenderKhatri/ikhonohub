const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'content_type',
  {
    ccp_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    no_of_reading: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false
      },
      no_of_videos: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false
      },
      no_of_Assignment: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false
      },
      course_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false
      }
  },
  {
    timestamps: false
  }
)