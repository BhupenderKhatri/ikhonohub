const express = require('express')
const learning_processes = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const learningprocess = require('../models/learning_process.js')
learning_processes.use(cors())


learning_processes.post('/', (req, res) => {
    const today = new Date()
    const learningprocessData = {
        status: req.body.status,
        count: req.body.count
    }
})

const analytics = {
    current: [{
        video: 'data structures',
        Lesson: "lists",
        Quiz: "not done"
    }],
    next: [{
        overview: "",
        heading: "problems",
        review: "hard and cool"
    }],
    progress: [
        { bar: 56 }
    ]
}

learning_processes.post('/current', (req, res) => {
    const userdataid = { id: req.body.id };
    console.log(userdataid.id);
    res.json(analytics.current)
})

learning_processes.post('/next', (req, res) => {
    const userdataid = { id: req.body.id };
    console.log(userdataid.id);
    res.json(analytics.next)
})

learning_processes.post('/progress', (req, res) => {
    const userdataid = { id: req.body.id };
    console.log(userdataid.id);
    res.json(analytics.progress)
})

module.exports = learning_processes;