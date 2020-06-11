const express = require('express')
const Student_enrollments = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const studentenrollment = require('../models/Student_enrollment')
Student_enrollments.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Student_enrollments.post('/', (req, res) => {
    const today = new Date()
    const student_enrollmentData = {
        date_of_enroll: req.body.date_of_enroll,
        date_of_comp: req.body.date_of_comp,
        is_paid: req.body.is_paid
    }
})
module.exports=Student_enrollments;