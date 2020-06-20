import React from 'react';
import './course_intro1.css';
import './course_intro.css' ;
import StarRatingComponent from 'react-star-rating-component';

const Intro = ({head,para , subtitle,creator }) => {
    return (
      <div id="courseintro1_main">
      <div id="courseintro1_left">
          <h1 class="head">{head}</h1>
          <h1 class="head">{subtitle}</h1>
          <p class="styling">
          <StarRatingComponent 
          name="rate2" 
          editing={false}
         
          starCount={5}
          value={5}
        />
        </p>
          <p class="styling">{para}</p>
          <p class="styling">{creator}</p>
        </div>
        <div id="courseintro1_right">
        <h1 class="head">in this guided project,you will:</h1>
        <p class="styling">You'll understand the major feature of HTML,CSS.</p>
        <p class="styling">You'll able to apply HTML,CSS in practical situation</p>
        <p class="styling">You'll learn how to fix every problem caused by this</p>
        </div>
      </div>
    );
  }

export default Intro;

