const Sequelize = require('sequelize')
const db = require('../database/database/db.js')
const Student_enrollment = require('./Student_enrollment')

module.exports = db.sequelize.define(
  'test/quizes',
  {
    test_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date_of_test: {
      type: Sequelize.DATE
    },
    test_result: {
      type: Sequelize.INTEGER
    },
    remarks: {
      type: Sequelize.STRING(45)
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
   