import React ,{Component}from 'react';
import './answer.css';
class Answer extends Component{
    render(){
      
      return (
          <div>
<div class="answer_main">
<h1 id="answer_head">Answers to (at least some of) your questions</h1>
<div className="question-answer">

    <h3 id="question-title">Are there any prerequisites for the course?</h3>
    <p id="question-para">Yes, you should have basic knowledge of python , no prior knowledge of ML is required.</p>
    
    <h3 id="question-title">Do we provide certification?</h3>
    <p id="question-para">Yes, definitely you will get a course completion certificate which you can use on your professional platforms or resume.</p>
    
    <h3 id="question-title">Do we provide career opportunities?</h3>
    <p id="question-para">Yes, it depends on you if you pass with flying colors we will be there to help  u in best possible ways.</p>
   
    <h3 id="question-title">will this course meet the future demands?</h3>
    <p id="question-para">This course will lead u to every possible industrial aspect & will meet to the future demands.</p>

</div>
</div>
<div className="answer-black"></div>
</div>
);
}
}
    
export default Answer;