const express = require('express')
const Content_types = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const Content_type = require('../models/Content_type.js')
Content_types.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Content_types.post('/', (req, res) => {
    const today = new Date()
    const Content_typeData = {
        content_types_data: req.body.content_types_data
    }
})
module.exports = Content_types;