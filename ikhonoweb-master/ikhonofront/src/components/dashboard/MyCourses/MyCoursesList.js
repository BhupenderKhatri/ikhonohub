import React from 'react';
import MyCoursessend from "./MyCourses" ;
import {mycourses} from '../../../FinalDetails';
import'./MyCourses.css' ; 



const MyCoursesDetails = () => {
    return (
      <div >  
           

             {
           mycourses.map((user,i) =>  {
            
                          return(
              
                                    <MyCoursessend
                                    heading={mycourses[i].heading}
                                    data={mycourses[i].data}
                                    name={mycourses[i].name}    
                                    />
                            );
            
                                     }
          
                          )
             }
          </div>
          
        )
        }
            
  
  export default MyCoursesDetails ;