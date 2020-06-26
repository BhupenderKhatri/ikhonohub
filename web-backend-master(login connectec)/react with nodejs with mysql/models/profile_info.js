const Sequelize = require('sequelize')
const db = require('../database/database/db.js')
const User = require('./User')
const sequelize = require('sequelize')

module.exports = db.sequelize.define(
    'personal_infos', {
        pf_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        student_id: {
            type: Sequelize.INTEGER,

        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB
        },
        mobile: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        streak: {
            type: Sequelize.INTEGER
        },
        badges: {
            type: Sequelize.INTEGER
        },
        DOB: {
            type: Sequelize.DATE
        },
        DOR: {
            type: Sequelize.DATE
        },
        address: {
            type: sequelize.STRING
        },
        student_id: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                models: User,

                // This is the column name of the referenced model
                key: 'student_id'
            }
        }
    },

    {
        timestamps: false
    }
)