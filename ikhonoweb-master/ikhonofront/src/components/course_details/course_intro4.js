import React from 'react';
import './course_intro.css' ;

const detailspass = ({para1,para2,list1,list2}) => {
    return (
      <div >
          <h1 id='heading4'>
              Course Details
          </h1>
          <div id="set">
                    <p class="content4">{para1}</p>
                    <p class="content4">{para2}</p>
                    <ol>
                        <li>
                        <p  class="content4">{list1}</p>
                        </li>
                        <li>
                        <p class="content4">{list2}</p>
                        </li>
                    </ol>
          </div>
          
          
          
         
      </div>
    );
  }

export default detailspass ;