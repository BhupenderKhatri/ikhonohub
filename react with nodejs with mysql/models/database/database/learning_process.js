const Sequelize = require('sequelize')
const learning_process = require('../database/database/learning_process.js')

module.exports = db.sequelize.define(
  'learning_process',
  {
    process_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: Sequelize.BINARY
    },
    enroll_id: {
      type: Sequelize.INTEGER
    },
    ccc_id: {
      type: Sequelize.INTEGER
    },
    count: {
        type: Sequelize.INTEGER
      },
    })
    db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = learning_process