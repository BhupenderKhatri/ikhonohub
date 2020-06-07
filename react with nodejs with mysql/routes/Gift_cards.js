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


gift_cards.post('/giftcard', (req, res) => {
    const today = new Date()
    return giftcard.create({
        reciever_email: req.body.reciever_email,
        receiver_name: req.body.receiver_name,
        value: req.body.value,
        no_of_cards: req.body.no_of_cards,
        gift_name: req.body.gift_name,
        message: req.body.message

    }).then(function(giftcard){
        if(giftcard){
            res.send(giftcard);
        } else{
            res.status(400).send('Error in insert new record');
        }
    });


})


// gift_cards.post('/saved_cards', (req,res) =>{


// gift_cards.findOne({
//     where: {
//         reciever_email: req.body.reciever_email
//     }
// })

// .then(gift_cards => {
//     console.log(gift_cards.receiver_name);
// })
// })
module.exports=gift_cards;