const express = require('express')
const categories = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const Category = require('../models/category.js')
categories.use(cors())
process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

categories.post('/', (req, res) => {
    const today = new Date()
    const categoryData = {
        cate_type: req.body.cate_type
    }
})


module.exports= categories