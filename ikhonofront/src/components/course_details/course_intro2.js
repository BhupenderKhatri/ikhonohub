import React from 'react';
import './course_intro2.css' ;

const What=({point1,point2,point3,point4,point5}) =>{
    return(
      <div id ="intro2main">
          <h1 id="heading2">What you will Learn!!!</h1>
        <div id="con_intro2">
               <ul class="list_intro2_00">
                   
                       
                    <li id="stylingintro2">&nbsp; {point1}</li>
                    <li id="stylingintro2">&nbsp; {point2}</li>
                              

                       </ul>
            <ul class="list_intro2_11">
            
                    <li id="stylingintro2">&nbsp; {point3}</li>
                    <li id="stylingintro2">&nbsp; {point4}</li>
                    <li id="stylingintro2">&nbsp; {point5}</li>
                    
                
               </ul>
               
            </div>
     
      </div>
        
    );
  
  }
  
  
  export default What ;