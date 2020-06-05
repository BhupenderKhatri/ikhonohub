const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'learning_process',
  {
    process_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: Sequelize.BOOLEAN
    },
   
    count: {
        type: Sequelize.INTEGER
      },
      enroll_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: Student_enrollment,

          // This is the column name of the referenced model
          key: 'enroll_id'
      }

      },
      ccc_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: course_chapter_content,

          // This is the column name of the referenced model
          key: 'ccc_id'
      }
      },
    },
      {
        timestamps: false
      }
    })
   