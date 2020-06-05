const Sequelize = require('sequelize')
const test = require('../database/database/test.js')

module.exports = db.sequelize.define(
  'test',
  {
    test_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date_of_test: {
      type: Sequelize.DATE
    },
    test_result: {
      type: Sequelize.INTEGER
    },
    remarks: {
      type: Sequelize.STRING(45)
    },
    enroll_id: {
        type: Sequelize.INTEGER
      },
    })
    db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = test