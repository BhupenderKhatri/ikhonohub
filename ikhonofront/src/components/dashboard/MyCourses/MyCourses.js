import React, { Component }  from 'react' ;
import'./MyCourses.css' ; 
import ComingSoon from './Tajmahal.jpg';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 45;
class MyCoursedetails extends Component {
    render(){
    return (

            <div id='mycourses_card'>
              <div id='mycourses_image_coming'><img src={ComingSoon} alt='error 404 not found'/></div>
              <div id='mycourses_content'>  
               <div id='mycourses_coursename'>{this.props.heading}</div>
                      <div id='mycourses_contentsecond'> 
                          <div id='mycourses_bar'><CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth='15' 
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,
                                
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                
                                    // Text size
                                    textSize: '25px',
                                    
                                
                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                
                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',
                                
                                    // Colors
                                    pathColor: `rgba(255,69,0, ${  100})`,
                                    textColor: '#fffc00',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                  })}
                                    />
                          </div>
                          <div><p id='mycourses_start'>Start Course</p></div>
                      </div>
              </div>
            </div>
            
        );

}
}

export default MyCoursedetails ;