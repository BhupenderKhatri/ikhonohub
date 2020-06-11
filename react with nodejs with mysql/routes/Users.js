const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        name: req.body.signupUser,
        email: req.body.signupEmail,
        password: req.body.signupPassword
    }

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
                        var verify = Math.floor((Math.random() * 10000000) + 1);

                        var mailOption = {
                            from: 'iknonohhub@gmail.com', // sender this is your email here
                            to: `ag.adityagupta1998@gmail.com`, // receiver email2
                            subject: "Account Verification",
                            html: `<h4>Hello ,Please Click on this link to verify you account<h4><br><hr>
    <br><a href="http://localhost:4000/verification/?email=${req.body.email}&verify=${verify}/">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>`
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
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


// users.get('/verification/', (req, res) => {
//     function activateAccount() {
//         //if (verification == qdata.verify) {
//         //pool.query(
//         //  `UPDATE login SET verified = $2  WHERE email = $1`, [req.query.email,true],
//         //(err, results) => {
//         //  if (err) {
//         //    throw err;
//         //} else {
//         req.flash("success_msg", "You are now registered. Please log in");
//         res.redirect("/client/src/components/Login");
//         //res.cookie("UserInfo", userdata);
//         //res.send('<h1>Account Verification Successfully</h1>');
//         //}
//         //})
//         //else {
//         //  res.send("<h1>verification failed</h1>")
//     }


//     var q = url.parse(req.url, true);
//     var qdata = q.query;
//     //pool.query(
//     //  `SELECT login.verification FROM login
//     //WHERE email = $1`, [qdata.email],
//     //(err, results) => {
//     //  if (err) {
//     //    throw err;
//     //} else {

//     console.log(qdata.email);
//     // data = results.rows;
//     //  data.forEach(row => {
//     //    console.log(`id: ${row.id} name: ${row.name} `);
//     //});

//     activateAccount();
//     /* var verify1 = req.query.verify;
//     var verify2 = result[0].verification; 
//     if(verify1 == verify2) {
//         activateAccount(result[0].verification);
//     }else{
//         res.send("<h1>verification fail</h1>")
//     } */
//     //}
//     //})
// });

// users.post('/login', (req, res) => {
//     User.findOne({
//             where: {
//                 email: req.body.signupEmail
//             }
//         })
//         .then(users => {
//             if (users) {
//                 if (bcrypt.compareSync(req.body.signupPassword, users.signupPassword)) {
//                     let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//                         expiresIn: 1440
//                     })
//                     res.send(token)
//                 }
//             } else {
//                 res.status(400).json({ error: 'User does not exist' })
//             }
//         })
//         .catch(err => {
//             res.status(400).json({ error: err })
//         })
// })

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


users.post('/login',(req,res)=>{
    const userData = {
        email: req.body.loginEmail,
        password: req.body.loginPassword
    }

    console.log(userData);
    res.json("sucess");

})


const user ={
    info:[
        {
            userid:1,
            name:"Khatri",
            subscription:'Free',
            streak:'5',
            badges:'0'

        }
        
    ]

}





users.post('/personalinfo',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(user.info);
   }
)













module.exports = users