import React from 'react';
import './course_intro.css' ;

const Questions = ({ques1,ques2,ques3,ans1,ans2,ans3,point1,point2,point3}) => {
    return (
      <div id="background">
          <h1 id="heading5">
          Answers to your questions
          </h1>
         <ul id="questioning">
            <li class="ques">{ques1}</li>
            <li>{ans1}</li>
            <li class="ques">{ques2}</li>
            <li>
              <ol>
                <li>{point1}</li>
                <li>{point2}</li>
                <li>{point3}</li>
              </ol>
            </li>
            <li class="ques">{ques3}</li>
            <li>{ans3}</li>
         </ul>
      </div>
    );
  }

export default Questions;