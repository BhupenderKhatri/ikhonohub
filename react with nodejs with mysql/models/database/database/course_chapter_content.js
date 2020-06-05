const Sequelize = require('sequelize')
const gift_card = require('../database/database/course_chapter_content.js')

module.exports = db.sequelize.define(
  'course_chapter_content',
  {
    ccc_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content_type_id: {
      type: Sequelize.INTEGER
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
        type: Sequelize.BINARY
      },
    ccp_id: {
        type: Sequelize.INTEGER
      },
    content_type_id: {
        type: Sequelize.INTEGER
      },
    })
    db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = course_chapter_content