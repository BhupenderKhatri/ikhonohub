const express = require('express')
const learning_processes = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const learningprocess= require('../models/learning_process.js')
learning_processes.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

learning_processes.post('/', (req, res) => {
    const today = new Date()
    const learningprocessData = {
        status: req.body.status,
        count: req.body.count
    }
})
module.exports=learning_processes;