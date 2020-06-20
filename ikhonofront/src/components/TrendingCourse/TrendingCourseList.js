import React from 'react';
import Trending from './TrendingCourses';
import {recommendedtrendingcourses} from '../../TrendingCoursesDetails';
import './TrendingCoursesList.css';

const TrendingList = () => {
  return (
    <div >
        <p id="trending_courses_heading">Trending Courses</p>
        <div id='trendingcourseslist_main'>
        {
          
        
        recommendedtrendingcourses.map((user,i) =>  {
          
          return(
 
            < Trending 
            image ={recommendedtrendingcourses[i].img}
            name={recommendedtrendingcourses[i].name}         
            heading={recommendedtrendingcourses[i].heading}
            rating={recommendedtrendingcourses[i].rating}
            userimg={recommendedtrendingcourses[i].userimg}
            />
            
          
            );
          
        })
        
      }
    
    </div>
    </div>
    
  );
}

export default TrendingList;