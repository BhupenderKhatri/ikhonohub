import React,{Component} from 'react';
import Subjects from './subjects/subjects';
import './mainCourses.css';


class mainCourse extends Component {
  render(){
    return (
    
      <div className="subjects">
            <div>
                <Subjects />
          </div>
      </div>
    );
  }
}
export default mainCourse;