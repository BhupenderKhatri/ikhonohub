import React from 'react';
import './answer.css';


const Answer=({ques1,ans1,ques2,ans2,ques3,ans3,ques4,ans4,ques5,ans5,ques6,ans6,ques7,ans7,ques8,ans8})=>{
   
      
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

    <h3 id="question-title">{ques5}</h3>
    <p id="question-para">{ans5}</p>
    
    <h3 id="question-title">{ques6}</h3>
    <p id="question-para">{ans6}</p>
    
    <h3 id="question-title">{ques7}</h3>
    <p id="question-para">{ans7}</p>
   
    <h3 id="question-title">{ques8}</h3>
    <p id="question-para">{ans8}</p>

</div>
</div>
<div className="answer-black"></div>
</div>
);

}
    
export default Answer;