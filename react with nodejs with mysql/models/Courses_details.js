const Sequelize = require('sequelize')
const db = require('../database/database/db.js')
const Language = require('./Language')
const category = require('./category')

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
      type: Sequelize.STRING,
      allowNull:true
    },
    course_rating: {
      type: Sequelize.INTEGER,
      allowNull:true
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull:true
    },
    short_description: {
      type: Sequelize.STRING,
      allowNull:true
    },
    long_description: {
        type: Sequelize.STRING,
        allowNull:true
    },
    no_of_chapter: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    total_hours_of_course: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    course_photo: {
        type: Sequelize.BLOB,
        allowNull:true
    },
    lang_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          models: Language,

          // This is the column name of the referenced model
          key: 'lang_id'
      }
    },
    cate_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          models: category,

          // This is the column name of the referenced model
          key: 'cate_id'
      }
    
    }
  },
  {
    timestamps: false
  }
)