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
        allowNull:true
      },
      no_of_videos: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:true
      },
      no_of_Assignment: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:true
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: Courses_details,

          // This is the column name of the referenced model
          key: 'course_id'
      }
      }
  },
  {
    timestamps: false
  }
)