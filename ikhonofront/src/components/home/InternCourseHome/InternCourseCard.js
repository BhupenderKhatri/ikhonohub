import React, { Component } from 'react';
import './InternCourseCard.css';
import Ios from '../../interncourse/intern_IOS';
import {Link} from 'react-router-dom' ; 
import history from '../../../history';

class InternCourse extends Component  {
  
 onClickChange=(identity)=>{

   console.log(identity);
   if(identity===1){
    history.push('/internpython')
   }
   if(identity===2){
    history.push('/internwebdev')
   }
   if(identity===3){
    history.push('/internIOS')
   }
   if(identity===4){
    history.push('/internML')
   }
   if(identity===5){
    history.push('/internUXUI')
   }
   if(identity===6){
    history.push('/interncareer')
   }

   
 } 
  render(){


  const {id,heading,imagesrc} =this.props;
  return (
     <div id="internhomebasebackground">

    
        <div id="interncardbase" >
          <img id="image_intern_home" class="imageClass" alt='img' src={imagesrc} />
          <p id="intern_home_heading">{heading}</p>
          <button id="internHome_button" onClick={()=>this.onClickChange(id)} >Learn More</button>
        </div>
    </div>
    );
  }
  }
 
export default InternCourse;