const Sequelize = require('sequelize')
const purchase_history = require('../database/database/purchase_history.js')

module.exports = db.sequelize.define(
  'purchase_history',
  {
    purchase_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    receipt: {
      type: Sequelize.STRING(45)
    },
    transaction_no: {
      type: Sequelize.STRING(45)
    },
    course_id: {
      type: Sequelize.INTEGER
    },
    enroll_id: {
        type: Sequelize.INTEGER
      },
    })
    db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = purchase_history