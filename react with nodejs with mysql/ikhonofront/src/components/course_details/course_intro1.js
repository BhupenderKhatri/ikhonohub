import React from 'react';
import './course_intro.css' ;

const Intro = ({head,para , subtitle,creator }) => {
    return (
      <div>
          <h1 class="head">{head}</h1>
          <h1 class="head">{subtitle}</h1>
          <p class="styling">{para}</p>
          <p class="styling">{creator}</p>
      </div>
    );
  }

export default Intro;

