const Sequelize = require('sequelize')
const db = require('../database/database/db.js')
const User = require('./User')
const Courses_details = require('./Courses_details')

module.exports = db.sequelize.define(
  'student_enrollment',
  {
    enroll_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
     date_of_enroll: {
      type: Sequelize.DATE,
      allowNull:true
    },
    date_of_comp: {
        type: Sequelize.DATE,
        allowNull:true
      },
    is_paid: {
      type: Sequelize.CHAR,
      allowNull:true
    },
    student_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          models: User,
  
          // This is the column name of the referenced model
          key: 'student_id'
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