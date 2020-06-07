const Sequelize = require('sequelize')
const db = require('../database/database/db.js')
const Courses_details = require('./Courses_details')
const User = require('./User')

module.exports = db.sequelize.define(
  'gift_card',
  {
    gift_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    receiver_name:{
      type: Sequelize.STRING
    },
    reciever_email: {
      type: Sequelize.STRING
    },
    value: {
        type: Sequelize.INTEGER
      },
    no_of_cards: {
        type: Sequelize.INTEGER
      },
    gift_name: {
        type: Sequelize.STRING
      },
    message: {
        type: Sequelize.STRING
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
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          models: User,

          // This is the column name of the referenced model
          key: 'student_id'
      }
      }
    },
    {
      timestamps: false
    }
    )
   