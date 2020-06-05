const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

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
        allowNull:false
      },
    is_paid: {
      type: Sequelize.CHAR,
      allowNull:false
    },
    student_id: {
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