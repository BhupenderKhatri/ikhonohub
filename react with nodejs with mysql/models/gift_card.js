const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'gift_card',
  {
    gift_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    reciever_email: {
      type: Sequelize.STRING(45)
    },
    value: {
        type: Sequelize.INTEGER
      },
    no_of_cards: {
        type: Sequelize.INTEGER
      },
    gift_name: {
        type: Sequelize.STRING(45)
      },
    message: {
        type: Sequelize.STRING(45)
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: Courses_details,

          // This is the column name of the referenced model
          key: 'course_id'
      }
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: User,

          // This is the column name of the referenced model
          key: 'student_id'
      }
      }
    },
    {
      timestamps: false
    }
    )
   