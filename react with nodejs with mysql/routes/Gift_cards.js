const express = require('express')
const gift_cards = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const giftcard = require('../models/gift_card.js')
const db = require('../database/database/db.js')
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



gift_cards.post('/saved_cards', function(req, res){
   
  giftcard.findAll({where:{student_id: 9}}).then(data => {
    res.send(data);
    console.log(data)
  }).catch(err => {
    res.status(500).send({
      message: 
        err.message 
    });
});
});
module.exports=gift_cards;