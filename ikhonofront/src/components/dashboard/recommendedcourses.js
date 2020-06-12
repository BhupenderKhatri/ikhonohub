import React from 'react';
import Recommendedcard from './recomendcard';
import './recommendedcourses.css';
import history from '../../history';

const recommendedcourses = () => {
    return (
        <div >
            
           <div id='dashboard-CurrentCourse'>
                <table id='dashboard-resumeCourse'>
                <th>Current Section</th>
                <tr>
                    <td>Video</td>
                    <td id='co1'>class & Objects</td>
                </tr> 
             <tr>
             <td>Lesson </td>
             <td id='co1'>class & Objects</td>

                </tr>
                <tr>
                <td>Quiz</td>
                <td id='co1'>class & Objects</td>

                </tr>
                <tr>
                <td id='res'><button onClick={()=>history.push('/player')}>Resume</button> </td>
                <td id="arrow">→</td>
                </tr>
                </table>
            
            <table id='dashboard-next'> 
              <th>Next Section</th>
              <tr>
              <td>Classes & Objects</td>
              </tr>
              <tr>
              <td>Review</td>
              </tr>
              <tr>
              <td id="res1">Resume</td>
              <td id="arrow">→</td>
              </tr>              
            </table>
            <div id='dashboard-TotalProgress'> 
              <h2>Total Progress</h2>
              <h2>Analytics</h2>
              
            </div>
            </div>
            <div id='col1'>
               <h6> Recommended Courses</h6>
               <button id='btn_allcourses' onClick={()=>history.push('/AllCoursesLoggedIn')}>See All Courses</button>
            </div>
           <div>
               <Recommendedcard/>
           </div>
            
</div>
        
    );
}
export default recommendedcourses;