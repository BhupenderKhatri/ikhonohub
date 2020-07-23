const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const User = require('../models/User')
const profile_info = require('../models/profile_info')
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
///////////////////////////////////////////////////////////////////////////////
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

        User.findOne({
            where: {
                email: req.body.signupEmail
            }
        })

        .then(users => {
                if (!users) {
                    bcrypt.hash(req.body.signupPassword, 10, (err, hash) => {

                        function Store(pass) {


                            var mailOption = {
                                from: 'iknonohhub@gmail.com', // sender this is your email here
                                to: req.body.signupEmail, // receiver email2 
                                subject: "Account Verification",
                                html: `<h4>greetings!!</h4><br>
                                <h2>Ikhono Hub</h2>
                                <h3>Where Aspiration Meets Preparation</h3>
                                <h4><Welcome to ikhono hub online learning program./h4>
                                <br>
                                    <h4>You have successfully created the account with ikhono hub.
    </h4>before starting you need to verify ur account<h4><br>
    <br><a href="http://localhost:5000/users/verification/?em=${userData.email}">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>
    <br><h4>We provide you with the best quality of material.</h4><h4>As soon as u will enroll and verify your account with in 24 hours one of our mentor will get in touch of you and he will be there throughout your course , to solve your queries .</h4>
    <br><h4>we will assure that your learning with us will be fruitful to you.</h4><h4>You will have access to your FREE python course/you will have access to your course after the verification</h4>
    <br><h4>feel free to mail us at</h4><h4>iknonohhub@gmail.com</h4><h4>if you have any query</h4><br><h4>Happy Learning..! </h4>`
                            }

                            transporter.sendMail(mailOption, (error, info) => {
                                if (error) {
                                    console.log(error)
                                } else {
                                    userData.password = hash

                                    User.create(userData)
                                        .then(users => {
                                            profile_info.create({ student_id: users.student_id, name: userData.name, email: userData.email, DOR: today })
                                                .then(users1 => {
                                                    console.log("here");
                                                })
                                            res.send({ status: users.email + 'Registered!' })
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
})

///////////////////////////////////////////////////////////////////////////////////
users.get('/verification/', (req, res) => {

    var q = url.parse(req.url, true);
    var qdata = q.query;
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

/////////////////////////////////////////////////////////////////////////////////

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
                    } else {
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

///////////////////////////////////////////////////////////////////////////////

users.post('/logout', (req, res) => {
        let fLen = temp.length

        for (i = 0; i < fLen; i++) {

            if (req.body.token == temp[i]) {
                temp.pop[temp[i]]
                res.send("loggedout")

            }
        }
    })
    /////////////////////////////////////////////////////////////////////////////////

users.post('/personalinfo', (req, res) => {
    var decoded = jwtDecode(req.body.token);
    let fLen = temp.length

    for (i = 0; i < fLen; i++) {
        if (req.body.token == temp[i]) {
            profile_info.findAll({
                where: {
                    student_id: decoded.student_id
                }
            }).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
        }
    }

})

///////////////////////////////////////////////////////////////////////////////

users.post('/profilechange', (req, res) => {
    var decoded = jwtDecode(req.body.id);
    let fLen = temp.length
    for (i = 0; i < fLen; i++) {
        if (req.body.id == temp[i]) {


            const personalinformation = {
                name: req.body.name,
                mobile: req.body.mobile,
                image: req.body.image,
                gender: req.body.gender,
                address: req.body.address
            }
            profile_info.findOne({
                where: {
                    student_id: decoded.student_id
                }
            }).then((profile_info) => {
                profile_info.name = personalinformation.name
                profile_info.mobile = personalinformation.mobile
                profile_info.image = personalinformation.image
                profile_info.gender = personalinformation.gender
                profile_info.address = personalinformation.address

                profile_info.save();
                res.send('hello');
            }).catch(err => {
                res.send('error: ' + err)

            })
        }
    }

})

////////////////////////////////////////////////////////////////////
// users.post('/addresschange', (req, res) => {
//     const addresschange = {
//         name: req.body.addressname,
//         number: req.body.addressnumber,
//         pincode: req.body.addresspincode,
//         city: req.body.addresscity,
//         locality: req.body.addresslocality,
//         state: req.body.addressstate,
//         landmark: req.body.addresslandmark,
//         type: req.body.addresstype
//     }


//     console.log(addresschange);
//     res.json('addsucess');
// })

//////////////////////////////////////////////////////
users.post('/CallUserfordetail', (req, res) => {
    const calluser={
        id:req.body.userId,
        Name:req.body.userName,
        Email:req.body.userEmail,
        Contact:req.body.userContact,
        Plan:req.body.userPlan
    }

    Console.log(calluser);
    res.send("sucess");



})



module.exports = users