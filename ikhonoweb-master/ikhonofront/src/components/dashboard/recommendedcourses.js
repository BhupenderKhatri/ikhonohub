import React from 'react';
import CardList from '../course_cards/CardList';
import './recommendedcourses.css';
import history from '../../history';

const recommendedcourses = () => {
    return (
        <div >
           <div id='dashboard-CurrentCourse'>
            <div id='dashboard-resumeCourse'>
                <h2>Curent Section</h2>
                <div>Videos </div> 
                <div>Lesson </div>
                <div>Quiz</div>
                <div>Resume </div>
              
            </div>
            <div id='dashboard-TotalProgress'> 
              <h2>Total Progress</h2>
              
            </div>
            </div>
            <div id='col1'>
               <h6> Recommended Courses</h6>
               <button id='btn_allcourses' onClick={()=>history.push('/AllCoursesLoggedIn')}>See All Courses</button>
            </div>
           <div>
               <CardList/>
           </div>
            
</div>
        
    );
}
export default recommendedcourses;