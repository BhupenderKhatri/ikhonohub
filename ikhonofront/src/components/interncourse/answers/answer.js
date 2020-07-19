import React from 'react';
import './answer.css';


const Answer=({ques1,ans1,ques2,ans2,ques3,ans3,ques4,ans4})=>{
   
      
      return (
          <div>
<div class="answer_main">
<h1 id="answer_head">Answers to (at least some of) your questions</h1>
<div className="question-answer">

    <h3 id="question-title">{ques1}</h3>
    <p id="question-para">{ans1}</p>
    
    <h3 id="question-title">{ques2}</h3>
    <p id="question-para">{ans2}</p>
    
    <h3 id="question-title">{ques3}</h3>
    <p id="question-para">{ans3}</p>
   
    <h3 id="question-title">{ques4}</h3>
    <p id="question-para">{ans4}</p>

</div>
</div>
<div className="answer-black"></div>
</div>
);

}
    
export default Answer;