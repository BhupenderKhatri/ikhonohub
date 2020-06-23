import React from 'react';
import './course_intro4.css';

const detailspass = ({para1,para2,list1,list2}) => {
    return (
      <div id="course_detail_4" >
          <h1 id='heading4_coursedetail'>
              Course Details
          </h1>
          <div id="set_coursedetail">
                    <p class="content4_coursedetail">{para1}</p>
                    <p class="content4_coursedetail">{para2}</p>
                    <ol>
                        <li id="styling_intro4">
                        <p  class="content4_coursedetail">{list1}</p>
                        </li>
            <li id="styling_intro4">
                        <p class="content4_coursedetail">{list2}</p>
                        </li>
                    </ol>
          </div>
          
          
          
         
      </div>
    );
  }

export default detailspass ;