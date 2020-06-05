const express = require('express')
const Languages = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const language = require('../models/Language.js')
Languages.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Languages.post('/', (req, res) => {
    const today = new Date()
    const languageData = {
        lang_id: req.body.lang_id,
        language_type: req.body.language_type
    }
})

module.exports=Languages;