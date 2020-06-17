const express = require('express')
const Courses_chapters = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const Course_chapter = require('../models/Course_chapter.js')
Courses_chapters.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Courses_chapters.post('/', (req, res) => {
    const today = new Date()
    const Course_chapterData = {
        no_of_reading: req.body.no_of_reading,
        no_of_videos: req.body.no_of_videos,
        no_of_Assignment: req.body.no_of_Assignment,
     
    }
})


const card ={
    intro:[{
        id:1,
        heading: 'The Complete study of Python',
        subtitle : '  2020 : Zero to Hero' ,
        paragraph: 'Learn to code and become a Web Developer in 2020 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more! Learn to code and become a Web Developer in 2020 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more! ',
        creator : 'Created By-Siddharth Tewani'
    }
    ],
   what_you_learn :[{
        point1:"Skills that will allow you to apply for jobs like: Web Developer, Software Developer, Front End Developer, Javascript Developer, and Full Stack Developer",
        point2:"Build 10+ real world Web Development projects you can show off",
        point3:"Learn modern technologies that are ACTUALLY being used behind tech companies in 2020",
        point4:"Build a professional Portfolio Website",
        point5:"Master modern Web Development fundamentals as well as advanced topics",
    
    
    }],
instructor:[{
    
    }],
    
    why_course:[{
        id:1,
        heading: 'Why zero to mastery is Right for you',
        para1: 'With so many online resources available, it can be paralyzing not only figuring out where to start but more importantly which courses will actually teach you the skills you need to get hired. ',
        para2: 'That’s why the Zero To Mastery Academy exists, to provide industry-leading courses and content to teach you the relevant skills you need to advance your career and get you hired at some of the top companies in the world.'
    }],
    
    full_details:[{
        id:1,
        
        para1: 'Updated for 2020! Join thousands of other students taking this course taught by an industry expert that has worked both in Silicon Valley and Toronto. Graduates of Andrei’s courses are now working at Google, Amazon, Apple, IBM, Tesla, Facebook and other top tech companies.' ,
        para2 :'This is the tutorial you have been looking for to become a modern Web Developer in 2020. It doesn’t just cover a small portion of the industry. This covers everything you need to know to get hired—from absolute zero knowledge to being able to put things on your resume that will allow you to live the life you want.' ,
        list1: 'I update the course every month to make sure you learn the most up-to-date skills. There is no wasted time here. We won’t be using outdated technologies like PHP, Wordpress and JQuery. Although still useful, outdated technologies like the above are low-paying and demands for them are decreasing. In this course, youll learn the specific technologies that are the most in-demand in the industry right now. These include tools and technologies used by the biggest tech companies like Google, Facebook, Instagram etc. It’s geared specifically for people that want to learn employable skills in 2020.',
        list2:'This is the tutorial youve been looking for to become a modern Web Developer in 2020. It doesn’t just cover a small portion of the industry. This covers everything you need to know to get hired—from absolute zero knowledge to being able to put things on your resume that will allow you to live the life you want.' ,
    }],
    
   answer_to_questions:[{
        id:1,
        
        ques1:"Are there any prerequisites for this course?",
        ans1:"A computer (Windows/Mac/Linux). That's it! No previous coding experience is needed. All tools and software used in this course will be free.",
        ques2:"Who is this course for?",
        point1:"You want to learn to code and build websites and web apps",
        point2:"You are looking to start a career in Web Development",
        point3:"You know HTML and CSS but want to expand your skills and do more",
        ques3:"Do you provide a certificate of completion?",
        ans3:"We definitely do."
    
    }],
    priceofcourse:[
        {
            id : 1,
            image: "https://images.moneycontrol.com/static-mcnews/2020/05/XPS--770x433.jpg" ,
            para1 : " 34 hours on-demand , downloadable HD Videos " ,
            para2 :  "200+ bonus articles and resources",
            para3 : "Access to exclusive ZTM community",
            para4 : "Beginner, intermediate and advanced topics" ,
            para5 : "Certificate of Completion " ,
            discount : "90%off" ,
            priceofcontent : " ₹ 1000" ,
            videourl:"https://www.youtube.com/watch?v=4ndh8Dz3zdw&list=PLOzMsMamW90Ywlbt7griHh223qzGRkyP-"
        
        }
        ],
        views:[{
            id:1,
            
            image : "https://th.bing.com/th/id/OIP.sfo86HMNUM5FnWfcmAeWawHaLH?pid=Api&rs=1" ,
            name: "Siddharth" ,
            comment : "This course was absolutely amazing! Andrei helped me learn the concepts of web development and new libraries, frameworks, etc. by working on actual projects. It is always great seeing what I learn come to life. I am so much more confident in my skills and career now, thanks Andrei!"
        
           
        },
        {   id:2,
            image : "https://th.bing.com/th/id/OIP.sfo86HMNUM5FnWfcmAeWawHaLH?pid=Api&rs=1" ,
            name: "Udit" ,
            comment : "This course was absolutely amazing! Andrei helped me learn the concepts of web development and new libraries, frameworks, etc. by working on actual projects. It is always great seeing what I learn come to life. I am so much more confident in my skills and career now, thanks Andrei!"
            
        },
        {   id:3,
            
            image : "https://th.bing.com/th/id/OIP.sfo86HMNUM5FnWfcmAeWawHaLH?pid=Api&rs=1" ,
            name: "Banga" ,
            comment : "This course was absolutely amazing! Andrei helped me learn the concepts of web development and new libraries, frameworks, etc. by working on actual projects. It is always great seeing what I learn come to life. I am so much more confident in my skills and career now, thanks Andrei!"
        }
        ]
}



Courses_chapters.post('/cardinfodetail/views',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.views);
   }
)

Courses_chapters.post('/cardinfodetail/priceofcourse',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.priceofcourse);
   }
)



Courses_chapters.post('/cardinfodetail/intro',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.intro);
   }
)

Courses_chapters.post('/cardinfodetail/whatyoulearn',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.what_you_learn);
   }
)

Courses_chapters.post('/cardinfodetail/instructor',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.instructor);
   }
)

Courses_chapters.post('/cardinfodetail/why_course',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.why_course);
   }
)

Courses_chapters.post('/cardinfodetail/full_details',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.full_details);
   }
)

Courses_chapters.post('/cardinfodetail/answer_to_questions',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(card.answer_to_questions);
   }
)









module.exports=Courses_chapters;