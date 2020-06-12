const express = require('express')
const Project = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const project = require('../models/Project.js')
Project.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Project.post('/', (req, res) => {
    const today = new Date()
    const projectData = {
        project_name: req.body.project_name,
        project_grade: req.body.project_grade,
        zip_data: req.body.zip_data
    }
})
module.exports= Project;