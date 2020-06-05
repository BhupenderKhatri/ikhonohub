const Sequelize = require('sequelize')
const category = require('./category.js')

module.exports = category.sequelize.define(
  'category',
  {
    cat_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cat_type: {
      type: Sequelize.STRING(45)
    },
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = category