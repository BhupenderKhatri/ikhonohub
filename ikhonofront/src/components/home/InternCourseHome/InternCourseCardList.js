import React from 'react';
import InternCourse from './InternCourseCard';
import {InternCourseDetails} from '../../../InternCourseDetails';
import './InternCourseCard.css';

 const InternCourseList = () => {
  return (
    <div >
      <p id="internship_home_head">Popular Courses</p>
      <div id="internhomebasebackground">
       {InternCourseDetails.map((user,i)=>{
           return(
             
               <InternCourse
                id={InternCourseDetails[i].id}     
                heading={InternCourseDetails[i].heading}      
                imagesrc={InternCourseDetails[i].imagesrc}                                                                                                                                 
               />
               
           );
       })}
       </div>
    </div>
  );
}

export default InternCourseList;