const express = require('express')
const Purchase_histories = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const purchasehistory = require('../models/purchase_history.js')
Purchase_histories .use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Purchase_histories .post('/', (req, res) => {
    const today = new Date()
    const purchase_historyData = {
        receipt: req.body.receipt,
        transaction_no: req.body.transaction_no
    }
})
module.exports=Purchase_histories ;