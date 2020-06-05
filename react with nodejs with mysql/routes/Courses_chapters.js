const express = require('express')
const Courses_chapters = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const Course_chapter = require('../models/Course_chapter.js')
Courses_chapters.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Courses_chapters.post('/', (req, res) => {
    const today = new Date()
    const Course_chapterData = {
        no_of_reading: req.body.no_of_reading,
        no_of_videos: req.body.no_of_videos,
        no_of_Assignment: req.body.no_of_Assignment,
     
    }
})
module.exports=Courses_chapters;