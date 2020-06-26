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


// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'iknonohhub@gmail.com',
//         pass: 'mylifemyrules'
//     }
// });

// Test_results.post('/', (req, res) => {
//     const today = new Date()
//     const testresultsData = {
//         date_of_test: req.body.date_of_test,
//         test_result: req.body.test_result,
//         remarks: req.body.remarks,
//         enroll_id: req.body.enroll_id
//     }
// })



const quiztest ={ 
  quizQuestions :[
  {
    question: "What franchise would you rather play a game from?",
    answerindex : 1,
    answers: [
      {
        type: "option1",
        content: "Halo",
        answer : false
      },
      {
        type: "option2",
        content: "Pokemon",
        answer : false
      },
      {
        type: "option3",
        content: "Uncharted1",
        answer : false
      },
      {
        type: "option4",
        content: "Uncharted2",
        answer : false
      }
    ]
  },
  {
    question: "Which console would you prefer to play with friends?",
    answerindex : 3,
    answers: [
      {
        type: "option1",
        content: "X-Box",
        answer : false
      },
      {
        type: "option2",
        content: "amdocs 64",
        answer : false
      },
      {
        type: "option3",
        content: "Playstation 100",
        answer : false
      },
      {
        type: "option4",
        content: "Playstation 1",
        answer : false
      }
    ]
  },
  {
    question: "Which of these racing franchises would you prefer to play a game from?",
    answerindex : 2,
    answers: [
      {
        type: "option1",
        content: "Forza",
        answer : false
      },
      {
        type: "option2",
        content: "Mario Kart",
        answer : false
      },
      {
        type: "option3",
        content: "Gran Turismo",
        answer : false
      },
      {
        type: "option4",
        content: "Playstation 1qq",
        answer : false
      }
    ]
  },
  {
    question: "Which of these games do you think is best?",
    answerindex : 1,
    answers: [
      {
        type: "option1",
        content: "BioShock",
        answer : false
      },
      {
        type: "option2",
        content: "The Legend of Zelda: Ocarina of Time",
        answer : false
      },
      {
        type: "option3",
        content: "Final Fantasy VII",
        answer : false
      },
      {
        type: "option4",
        content: "Playstation 1",
        answer : false
      }
    ]
  },
  {
    question: "What console would you prefer to own?",
    answerindex : 1,
    answers: [
      {
        type: "option1",
        content: "X-Box One",
        answer : false
      },
      {
        type: "option2",
        content: "Wii U",
        answer : false
      },
      {
        type: "option3",
        content: "Playstation 4",
        answer : false
      },
      {
        type: "option4",
        content: "Playstation11 1",
        answer : false
      }
    ]
  }
]
}



Test_results.get('/quiz',(req,res)=>{
    console.log(quiztest.quizQuestions);
   res.json(quiztest.quizQuestions)
   }
)
module.exports=Test_results;