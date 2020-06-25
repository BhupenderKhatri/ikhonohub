const express = require('express')
const Courses_details_routes = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
var url = require('url');
const Course_detail = require('../models/Courses_details.js')
Courses_details_routes.use(cors())

process.env.SECRET_KEY = 'secret'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iknonohhub@gmail.com',
        pass: 'mylifemyrules'
    }
});

Courses_details_routes.post('/', (req, res) => {
    const today = new Date()
    const coursedetailData = {
        course_name: req.body.course_name,
        course_rating: req.body.course_rating,
        price: req.body.price,
        short_description: req.body.short_description,
        long_description: req.body.long_description,
        no_of_chapter: req.body.no_of_chapter,
        total_hours_of_course: req.body.total_hours_of_course,
        course_photo: req.body.course_photo
    }
})

const Courses ={
    users:[
        {
            id:1,
          
            heading: "Web Developement",
            data:"This is the comeplete course",
            name:"Khatri",
            url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
        }
        ,{
            id:2,
          
            heading: "python",
            data:"This is the comeplete course",
            name:"Khatri",
            url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
        }
        ,
        {
            id:3,
          
            heading: "germana",
            data:"This is the comeplete course",
            name:"Khatri",
            url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
        }
    ]

}

Courses_details_routes.get('/popularcourse',(req,res)=>{
            res.json(Courses.users)
    })
    
Courses_details_routes.get('/recommendedcourse',(req,res)=>{
        res.json(Courses.users)
    })
Courses_details_routes.post('/mycourses',(req,res)=>{
    const userdataid = {  id:req.body.id };
   console.log(userdataid.id);
   res.json(Courses.users)
   }
)



    const database ={
        allcourses:[
                    {
                        id:1,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                        heading: "Web Developement ",
                        subject:"web development",
                        rating : "4.4" ,
                        data:"Learn to code and become a Web developerin 2020 using HTML,CSS,Javascript , React, Nodejs and more",
                        name:"Khatri",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        
                    },
                    {   id:2,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                        heading: "comming soon",
                        subject:"web development",
                        rating : "4.4" ,
                        data:"Learn to code and become a Web developerin 2020 using HTML,CSS,Javascript , React, Nodejs and more",
                        name:"comming soon",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    },
                    {
                        id:3,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                        heading: "Web Developement ",
                        subject:"web development",
                        rating : "4.4" ,
                        data:"Learn to code and become a Web developerin 2020 using HTML,CSS,Javascript , React, Nodejs and more",
                        name:"Siddharth",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    }
                    ,
                    {
                        id:1,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                       heading: "python",
                       subject:"PYTHON",
                        data:"This is the comeplete course t",
                        name:"Khatri",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    },
                    {   id:2,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                        heading: "comming soon",
                        subject:"PYTHON",
                        data:"comming soon ",
                        name:"comming soon",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    },
    
                    {
                        id:1,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                        heading: "Maths 1",
                        subject:'Maths',
                        data:"This is the comeplete course t",
                        name:"Khatri",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    },
                    {   id:2,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                        heading: "comming soon",
                        subject:"PYTHON",
                        data:"comming soon ",
                        name:"comming soon",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    },
                    {
                        id:1,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                        heading: "French 1",
                        subject:"French",
                        data:"This is the comeplete course t",
                        name:"Khatri",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    },
                    {   id:2,
                        img :  "https://i.cdn.newsbytesapp.com/images/200_11061589456404.jpg" ,
                       heading: "comming soon",
                       subject:"French",
                        data:"comming soon ",
                        name:"comming soon",
                        url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    },
                    ],
                    recommendedtrendingcourses:[{
                        id:1,
                        img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                        heading: "Web Developement",
                        rating:0 ,
                        name:"Siddharth",
                        userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                    }   ,
                    {
                        id:2,
                        img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                        heading: "Python",
                        rating:0 ,
                        name:"Siddharth",
                        userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                    }  ,
                    {
                        id:3,
                        img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                        heading: "Python",
                        rating:0 ,
                        name:"Siddharth",
                        userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                    },
                    {
                        id:4,
                        img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                        heading: "Python",
                        rating:0 ,
                        name:"Siddharth",
                        userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                    }  ,
                    {
                        id:5,
                        img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                        heading: "Python",
                        rating:0 ,
                        name:"Siddharth",
                        userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                    }
                ],
                recommendedtrendingcourses:[{
                    id:1,
                    img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                    heading: "Web Developement",
                    rating:0 ,
                    name:"Siddharth",
                    userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                }   ,
                {
                    id:2,
                    img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                    heading: "Python",
                    rating:0 ,
                    name:"Siddharth",
                    userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                }  ,
                {
                    id:3,
                    img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                    heading: "Python",
                    rating:0 ,
                    name:"Siddharth",
                    userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                },
                {
                    id:4,
                    img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                    heading: "Python",
                    rating:0 ,
                    name:"Siddharth",
                    userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                }  ,
                {
                    id:5,
                    img:"https://th.bing.com/th/id/OIP.MSz9EpxABUcU-r_xyAabQQHaFK?pid=Api&rs=1"  ,
                    heading: "Python",
                    rating:0 ,
                    name:"Siddharth",
                    userimg:"https://th.bing.com/th/id/OIP.sTgGdkStC3pi7W0Kwn2heQHaD3?pid=Api&rs=1"

                }
                    ]

    
            }
       
    
    
    
    Courses_details_routes.get('/Allcourses',(req,res)=>{
        res.json(database.allcourses)
        
        
    })


    
    Courses_details_routes.post('/trendingcourses',(req,res)=>{
        const userdataid = {  id:req.body.id };
       console.log(userdataid.id);
       res.json(database.recommendedtrendingcourses);
       }
    )



module.exports=Courses_details_routes;