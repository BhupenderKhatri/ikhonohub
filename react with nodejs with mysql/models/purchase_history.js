const Sequelize = require('sequelize')
const db = require('../database/database/db.js')
const  Courses_details = require('./Courses_details')
const Student_enrollment = require('./Student_enrollment')

module.exports = db.sequelize.define(
  'purchase_history',
  {
    purchase_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    receipt: {
      type: Sequelize.STRING(45)
    },
    transaction_no: {
      type: Sequelize.STRING(45)
    },
    course_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        models: Courses_details,

        // This is the column name of the referenced model
        key: 'course_id'
    }
    },
    enroll_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          models: Student_enrollment,

          // This is the column name of the referenced model
          key: 'enroll_id'
      }
      }
    },
    {
      timestamps: false
    }
    )
    