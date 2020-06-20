import React from 'react';
import './course_intro.css' ;

const Right_Now = ({head, para1 , para2  }) => {
    return (
     <div> <div>
          <h1 id="heading3_coursedetail">{head}</h1>
        <p class="content3_coursedetail">{para1}</p>
        <p  class="content3_coursedetail">{para2}</p> 
      </div>
      
      </div>
    );
  }

export default  Right_Now ;