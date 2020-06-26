const express = require('express')
const Student_enrollments = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const studentenrollment = require('../models/Student_enrollment')
Student_enrollments.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Student_enrollments.post('/', (req, res) => {
    const today = new Date()
    const student_enrollmentData = {
        date_of_enroll: req.body.date_of_enroll,
        date_of_comp: req.body.date_of_comp,
        is_paid: req.body.is_paid
    }
})




const cart ={
    productionItems :[
        {id:1, 
            course:'Python for Beginners',
            name:'Dev', 
            price:1000
        }
    ]
}


Student_enrollments.post('/cartproduction',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(cart.productionItems);

}
)


const coupondetail={
    value:[{
        coupon:'tutu',
        discount:200
    },
{
    coupon:'',
    discount:0
}
]
}

Student_enrollments.post('/couponvalue',(req,res)=>{
    const userdataid = {  coupon:req.body.coupon };
   console.log(userdataid.coupon);
  // if(userdataid.coupon==coupondetail.value.coupon)
   res.json(coupondetail.value[0].discount);

}
)




Student_enrollments.post('/cartcardadd',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   //id returned is the card id which is to be add  from array

}
)
Student_enrollments.post('/cartcarddelete',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   //id returned is the card id which is to be removed from array

}
)



module.exports=Student_enrollments;