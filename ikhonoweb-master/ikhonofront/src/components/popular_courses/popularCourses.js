import React from 'react';
import CardList from '../course_cards/CardList';
import './popularCourses.css';


const popularCourses = () => {
    return (
        <div >
            <div id='col1'>
                <p>Popoular Courses</p>
            </div>
           <div>
               <CardList/>
           </div>
            
</div>
        
    );
}
export default popularCourses;