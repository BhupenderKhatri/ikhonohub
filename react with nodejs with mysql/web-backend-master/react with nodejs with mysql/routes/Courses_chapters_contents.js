const express = require('express')
const course_chapter_contents= express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const Course_chapter_content = require('../models/course_chapter_content.js')
course_chapter_contents.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

course_chapter_contents.post('/', (req, res) => {
    const today = new Date()
    const course_chapter_contentData = {
        time_required : req.body.time_required,
        is_open: req.body.is_open,
        is_mand: req.body.is_mand,
        status:req.body.status
     
    }
})
module.exports = course_chapter_contents;