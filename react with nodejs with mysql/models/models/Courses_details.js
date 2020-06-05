const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'courses_details',
  {
    course_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull:false,
      autoIncrement: true
    },
    course_name: {
      type: Sequelize.VARCHAR(45),
      allowNull:false
    },
    course_rating: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    short_description: {
      type: Sequelize.VARCHAR(45),
      allowNull:false
    },
    long_description: {
        type: Sequelize.VARCHAR(45),
        allowNull:false
    },
    no_of_chapter: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    total_hours_of_course: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    course_photo: {
        type: Sequelize.BLOB,
        allowNull:false
    },
    lang_id: {
        type: Sequelize.INTEGER
    },
    cat_id: {
        type: Sequelize.INTEGER,
    
    }
  },
  {
    timestamps: false
  }
)