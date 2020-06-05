const Sequelize = require('sequelize')
const db = require('../database/database/db.js')

module.exports = db.sequelize.define(
  'users',
  {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    photo: {
      type:Sequelize.BLOB
    },
    mobile:{
      type:Sequelize.INTEGER
    },
    gender:{
      type:Sequelize.CHAR
    },
    badges:{
      type:Sequelize.INTEGER
    },
    active:{
      type:Sequelize.BOOLEAN
    },
    verified:{
      type:Sequelize.BOOLEAN
    },
    verification:{
      type:Sequelize.INTEGER
    },
    DOB:{
      type:Sequelize.DATE
    },
    DOR:{
      type:Sequelize.DATE
    }

  },
  {
    timestamps: false
  }
)