import React ,{Component}from 'react';
import './answer.css';
class Answer extends Component{
    render(){
      
      return (
          <div>
<div class="answer_main">
<h1 id="answer_head">Answers to (at least some of) your questions</h1>
<div className="question-answer">
    <h3 id="question-title">Are there any prerequisites for this course?</h3>
    <p id="question-para">A computer (Windows/Mac/Linux). That's it! No previous coding experience is needed. All tools and software used in this course will be free.</p>


    <h3 id="question-title">Who is this course for?</h3>
    <ul>
        <li>You want to learn to code and build websites and web apps</li>
        <li>You are looking to start a career in Web Development</li>
        <li>You know HTML and CSS but want to expand your skills and do more</li>
        <li>You want to start your own business or become a freelancer</li>
    </ul>

    <h3 id="question-title">Do you provide a certificate of completion?</h3>
    <p id="question-para">We definitely do.</p>
</div>
</div>
<div className="answer-black"></div>
</div>
);
}
}
    
export default Answer;