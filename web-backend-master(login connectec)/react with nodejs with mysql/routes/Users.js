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
                                            profile_info.create({ student_id: users.student_id, name: userData.name, email: userData.email})
                                            .then(users1 => {
                                                console.log("here");
                                            })
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
})


users.get('/verification/', (req, res) => {

    var q = url.parse(req.url, true);
    var qdata = q.query;
    console.log(qdata.em);
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
                        console.log("hello");

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


users.post('/personalinfo', (req, res) => {
            profile_info.findAll({ where: { student_id: req.body.id } }).then(data => {
            res.send(data);
            console.log(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
    })




users.post('/profilechange', (req,res) =>{
    const today = new Date()
    const personalinformation = {
        name: req.body.name,
        mobile: req.body.mobile,
        image: req.body.image,
        gender:req.body.gender,
        address: req.body.address
    }
    console.log(personalinformation);
    
    profile_info.findOne({
        where: {
            pf_id: req.body.id
        }
    }).then((profile_info) => {

       
            profile_info.name = personalinformation.name
            profile_info.mobile= personalinformation.mobile
            profile_info.image= personalinformation.image
            profile_info.gender= personalinformation.gender
            profile_info.address=personalinformation.address
            profile_info.save();

            res.send('hello');
        })  .catch(err => {
            res.send('error: ' + err)
        
        })
     

    })

    

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





module.exports = users