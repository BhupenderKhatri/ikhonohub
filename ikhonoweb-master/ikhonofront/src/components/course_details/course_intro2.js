import React from 'react';
import './course_intro.css' ;

const What=({point1,point2,point3,point4,point5}) =>{
    return(
      <div>
          <h1 id="heading2">What you will Learn!!!</h1>
           <table >
               <ul id="list">
                   <tr>
                       <td id="firsthalf"> 
                              <li>{point1}</li>
                              <li>{point2}</li>
                              

                       </td>
                       <td id='secondhalf'>
                            <li>{point3}</li>
                            <li>{point4}</li>
                            <li>{point5}</li>
                       </td>
                   </tr>
               </ul>
           </table>
      </div>
    );
  
  }
  
  
  export default What ;