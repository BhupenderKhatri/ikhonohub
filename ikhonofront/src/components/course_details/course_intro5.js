import React from 'react';
import './course_intro5.css';

const Questions = ({ques1,ques2,ques3,ans1,ans2,ans3,point1,point2,point3}) => {
    return (
      <div id="background_course">
          <h1 id="heading5">
          Answers to (atleast some of) your questions
          </h1>
         <ul id="questioning">
            <li class="ques">{ques1}</li>
            <li class="ans">{ans1}</li>
            <li class="ques2">{ques2}</li>
            
              
                <li class="ans">{point1}</li>
                <li class="ans">{point2}</li>
                <li class="ans">{point3}</li>
              
          
            <li class="ques">{ques3}</li>
            <li class="ans">{ans3}</li>
         </ul>
      </div>
    );
  }

export default Questions;