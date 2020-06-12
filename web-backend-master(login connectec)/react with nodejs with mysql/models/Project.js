const Sequelize = require('sequelize')
const db = require('../database/database/db.js')
const Student_enrollment = require('./Student_enrollment')
const Courses_details = require('./Courses_details')

module.exports = db.sequelize.define(
  'project',
  {
    project_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: {
      type: Sequelize.STRING,
      allowNull:true
    },
    project_grade: {
      type: Sequelize.CHAR,
      allowNull:true
    },
    zip_data: {
        type: Sequelize.STRING,
        allowNull:true
      },
    enroll_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          models: Student_enrollment,

          // This is the column name of the referenced model
          key: 'enroll_id'
      }
    },
    course_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          models: Courses_details,

          // This is the column name of the referenced model
          key: 'course_id'
      }
    }
  },
  {
    timestamps: false
  }
)