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

Purchase_histories.post('/', (req, res) => {
    const today = new Date()
    const purchase_historyData = {
        receipt: req.body.receipt,
        transaction_no: req.body.transaction_no
    }
})

const purchase={
    purchaseItems:[
        {course:'IOS 11 & sWIFT 4-The Complete ios Development Bootcamp',Date:'Aug 14,2020', total_price:700,payment_type:'700 visa',button:'receipt'},
        {course:'IOS 11 & sWIFT 4-The Complete ios ',Date:'Aug 14,2020', total_price:600,payment_type:'700 visa',button:'receipt'}

        ]
}

Purchase_histories.post('/purchasehistory', (req, res) => {
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(purchase.purchaseItems)

})


module.exports=Purchase_histories ;