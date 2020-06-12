const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const User = require('../models/User')
var jwtDecode = require('jwt-decode');
users.use(cors())

process.env.SECRET_KEY = 'secret'

var temp = []
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

users.post('/register', (req, res) => {
    if (req.body.token) {
        fLen = temp.length;
        for (i = 0; i < fLen; i++) {
            if (req.body.token === temp[i]) {
                res.send('/dash')
            }
        }
    } else {
        const today = new Date()
        const userData = {
            name: req.body.signupUser,
            email: req.body.signupEmail,
            password: req.body.signupPassword,
            password2: req.body.signupPassword2
        }
        console.log(userData);
        let errors = [];

        console.log(userData);
        if (!userData.name || !userData.email || !userData.password || !userData.password2) {
            errors.push({ message: "Please enter all fields" });
        }

        if (userData.password.length < 6) {
            errors.push({ message: "Password must be a least 6 characters long" });
        }

        if (userData.password !== userData.password2) {
            errors.push({ message: "Passwords do not match" });
        }

        if (errors.length > 0) {
            // res.send("register", { errors, userData.name, userData.email, password, password2 });
        } else {
            User.findOne({
                where: {
                    email: req.body.signupEmail
                }
            })

            .then(users => {
                    if (!users) {
                        bcrypt.hash(req.body.signupPassword, 10, (err, hash) => {

                            console.log("hereeeee");

                            function Store(pass) {


                                var mailOption = {
                                    from: 'iknonohhub@gmail.com', // sender this is your email here
                                    to: req.body.signupEmail, // receiver email2 
                                    subject: "Account Verification",
                                    html: `<h4>Hello ,Please Click on this link to verify you account<h4><br><hr>
    <br><a href="http://localhost:5000/users/verification/?em=${userData.email}">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>`
                                }

                                transporter.sendMail(mailOption, (error, info) => {
                                    if (error) {
                                        console.log(error)
                                    } else {
                                        userData.password = hash
                                        User.create(userData)
                                            .then(users => {
                                                res.json({ status: users.email + 'Registered!' })
                                            })
                                            .catch(err => {
                                                res.send('error: ' + err)
                                            })


                                    }
                                });

                            }
                            Store(hash);
                        })
                    } else {
                        console.log('User already exists');
                    }
                })
                .catch(err => {
                    console.log('error: ' + err)
                })
        }
    }
})


users.get('/verification/', (req, res) => {

    var q = url.parse(req.url, true);
    var qdata = q.query;
    console.log(qdata.em);
    var ud = {

        verified: true
    }
    console.log("heree")
    User.findOne({
            where: {
                email: qdata.em
            }
        })
        .then(users => {

            users.verified = true
            users.save();


        })

})



users.post('/login', (req, res) => {

        if (req.body.token) {
            

            var decoded = jwtDecode(req.body.token);
            console.log(decoded.student_id);
            fLen = temp.length;
            for (i = 0; i < fLen; i++) {
                if (req.body.token === temp[i]) {
                    res.send('/dash')
                }
            }
        } else {
            User.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then(users => {

                    if (users) {

                        if (bcrypt.compareSync(req.body.password, users.password)) {

                            if (users.verified === true) {

                                let token = jwt.sign(users.dataValues, process.env.SECRET_KEY, {
                                    expiresIn: 140000000000
                                })

                                temp.push(token);

                                res.send(token)
                            } else {
                                console.log("not verfied")
                            }
                        }
                        else{
                            console.log("invalid password");

                        console.log('User does not exist')
                        }
                    } 
                })
                .catch(err => {

                    res.status(400).json({ error: err })
                })
        }
    })
    // users.get('/profile', (req, res) => {
    //     var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//     User.findOne({
//             where: {
//                 id: decoded.id
//             }
//         })
//         .then(user => {
//             if (user) {
//                 res.json(user)
//             } else {
//                 res.send('User does not exist')
//             }
//         })
//         .catch(err => {
//             res.send('error: ' + err)
//         })
// })
users.post('/logout', (req, res) => {
    console.log(req.body.token);
    let fLen = temp.length

    for (i = 0; i < fLen; i++) {
        console.log("here");

        if (req.body.token == temp[i]) {
            temp.pop[temp[i]]
            console.log("here");
            res.send("loggedout")

        }
    }
})
module.exports = users