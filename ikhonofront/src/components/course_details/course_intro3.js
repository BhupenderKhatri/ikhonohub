import React from 'react';
import './course_intro3.css' ;

const Right_Now = ({head, para1 , para2  }) => {
    return (
     <div class="coursedetailmust3"> 
          <h1 id="heading3_coursedetailmust">{head}</h1>
        <p class="content3_coursedetailmust">{para1}</p>
        <p  class="content3_coursedetailmust">{para2}</p> 
      
      </div>
    );
  }

export default  Right_Now ;