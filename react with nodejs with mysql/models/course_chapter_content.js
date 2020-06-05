const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'course_chapter_content',
  {
    ccc_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    
    time_required: {
      type: Sequelize.INTEGER
    },
    is_open: {
      type: Sequelize.CHAR
    },
    is_mand: {
        type: Sequelize.CHAR
      },
    status: {
        type: Sequelize.BOOLEAN
      },
    ccp_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: Course_chapter,

          // This is the column name of the referenced model
          key: 'ccp_id'
      }
      },

      cpntent_type_id: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: Content_type,

          // This is the column name of the referenced model
          key: 'cpntent_type_id'
      }
      }
    },
    {
      timestamps: false
    })