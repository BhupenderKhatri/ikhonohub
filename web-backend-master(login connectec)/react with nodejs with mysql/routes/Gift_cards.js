const express = require('express')
const gift_cards = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const giftcard = require('../models/gift_card.js')
gift_cards.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

gift_cards.post('/', (req, res) => {
    const today = new Date()
    const giftcardData = {
        reciever_email: req.body.reciever_email,
        value: req.body.value,
        no_of_cards: req.body.no_of_cards,
        gift_name: req.body.gift_name,
        message: req.body.message

    }
    // giftcard.create(giftcardData)
})
module.exports=gift_cards;