const Sequelize = require('sequelize')
const gift_card = require('../database/database/gift_card.js')

module.exports = db.sequelize.define(
  'gift_card',
  {
    gift_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course_id: {
      type: Sequelize.INTEGER
    },
    student_id: {
      type: Sequelize.INTEGER
    },
    recevier_email: {
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
    course_id_1: {
        type: Sequelize.INTEGER
      },
    student_id_1: {
        type: Sequelize.INTEGER
      },
    })
    db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = gift_card