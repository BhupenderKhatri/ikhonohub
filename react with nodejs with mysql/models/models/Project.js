const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'project',
  {
    project_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: {
      type: Sequelize.VARCHAR(45),
      allowNull:false
    },
    project_grade: {
      type: Sequelize.CHAR,
      allowNull:false
    },
    zip_data: {
        type: Sequelize.VARCHAR(45),
        allowNull:false
      },
    enroll_id: {
        type: Sequelize.INTEGER,
    },
    course_id: {
        type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
)