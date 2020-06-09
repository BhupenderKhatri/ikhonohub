import React from 'react';
import './course_intro.css' ;

const Right_Now = ({head, para1 , para2  }) => {
    return (
      <div>
          <h1 id="heading3">{head}</h1>
        <p class="content3">{para1}</p>
        <p  class="content3">{para2}</p> 
      </div>
    );
  }

export default  Right_Now ;