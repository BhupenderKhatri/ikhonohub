import React, { Component } from 'react';
import './InternCourseCard.css';
import Ios from '../../interncourse/intern_IOS';
import {Link} from 'react-router' ; 
class InternCourse extends Component  {
    
  render(){


  const {id,heading,imagesrc} =this.props;
  return (
     <div id="internhomebasebackground">

    
        <div id="interncardbase" >
          <img id="image_intern_home" alt='img' src={imagesrc} />
          <p id="intern_home_heading">{heading}</p>
          <button id="internHome_button">Learn More</button>
        </div>
    </div>
    );
  }
  }
 
export default InternCourse;