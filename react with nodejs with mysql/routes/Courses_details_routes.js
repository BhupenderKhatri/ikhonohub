const express = require('express')
const Courses_details_routes = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const Course_detail = require('../models/Courses_details.js')
Courses_details_routes.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Courses_details_routes.post('/', (req, res) => {
    const today = new Date()
    const coursedetailData = {
        course_name: req.body.course_name,
        course_rating: req.body.course_rating,
        price: req.body.price,
        short_description: req.body.short_description,
        long_description: req.body.long_description,
        no_of_chapter: req.body.no_of_chapter,
        total_hours_of_course: req.body.total_hours_of_course,
        course_photo: req.body.course_photo
    }
})
module.exports=Courses_details_routes;