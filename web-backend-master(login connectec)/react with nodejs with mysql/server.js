var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

var Users = require('./routes/Users')
var categories = require('./routes/Categories')
var Content_types = require('./routes/Contents_types')
var course_chapter_contents = require('./routes/Courses_chapters_contents')
var Courses_chapters = require('./routes/Courses_chapters')
var Courses_details_routes = require('./routes/Courses_details_routes')
var gift_cards = require('./routes/Gift_cards')
var Languages = require('./routes/Languages')
var learning_processes = require('./routes/Learning_processes')
var Project = require('./routes/Projects')
var Purchase_histories = require('./routes/Purchase_histories')
var Student_enrollments = require('./routes/Student_enrollments')
var Test_results = require('./routes/Tests')
var Razor_pay = require('./routes/Razorpay')



app.use('/users', Users)
app.use('/categories', categories)
app.use('/content_types', Content_types)
app.use('/course_chapter_content', course_chapter_contents)
app.use('/course_chapter', Courses_chapters)
app.use('/course_details', Courses_details_routes)
app.use('/gift_cards', gift_cards)
app.use('/languages', Languages)
app.use('/learning_processes', learning_processes)
app.use('/project', Project)
app.use('/purchase_history', Purchase_histories)
app.use('/student_enrollment', Student_enrollments)
app.use('/test_result', Test_results)
app.use('/razor_pay', Razor_pay)

app.listen(port, function() {
    console.log('Server is running on port: ' + port)
})