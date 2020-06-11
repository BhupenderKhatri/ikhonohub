const express = require('express')
const Test_results = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const test_results = require('../models/test')
Test_results.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Test_results.post('/', (req, res) => {
    const today = new Date()
    const testresultsData = {
        date_of_test: req.body.date_of_test,
        test_result: req.body.test_result,
        remarks: req.body.remarks,
        enroll_id: req.body.enroll_id
    }
})
module.exports=Test_results;