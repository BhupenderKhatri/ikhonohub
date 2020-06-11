// const Sequelize = require('sequelize')
// const db = require('../database/database/db.js')

// module.exports = db.sequelize.define(
//   'address',
//   {
//     address_id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: Sequelize.VARCHAR(45),
//       allowNull:false
//     },
//     pincode: {
//       type: Sequelize.INTEGER,
//       allowNull:false
//     },
//     locality: {
//       type: Sequelize.VARCHAR(45),
//       allowNull:false
//     },
//     address: {
//       type: Sequelize.VARCHAR(45),
//       allowNull:false
//     },
//     city: {
//         type: Sequelize.VARCHAR(45),
//         allowNull:false
//     },
//     state: {
//         type: Sequelize.VARCHAR(45),
//         allowNull:false
//     },
//     landmark: {
//         type: Sequelize.VARCHAR(45),
//         allowNull:false
//     },
//     mobile2: {
//         type: Sequelize.INTEGER,
//         allowNull:true
//     },
//     mobile: {
//         type: Sequelize.INTEGER,
//         allowNull:false
//     },
//     student_id: {
//         type: Sequelize.INTEGER
//     },
//     address_type: {
//         type: Sequelize.VARCHAR(45),
//         allowNull:false
//     }
//   },
//   {
//     timestamps: false
//   }
// )