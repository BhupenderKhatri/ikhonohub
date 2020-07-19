import React ,{Component}from 'react';
import './coursesubject.css';
import tick from './tick.png';
import  Rating from './star.png';
import clock from './clock.png';
import download from './download.png';
import certificate from './certificate.png';
import realproject from './realproject.png';
import splitscreenvideo from './splitscreenvideo.png';
import anydevice from './anydevice.png';
import flexibleplans from './flexibleplans.png';
import mentorsupport from './mentorsupport.png';


class Coursesubject extends Component{
    render(){
      
      return (
         <div>
            
 
<div class="coursesub-black"></div>
  <div id="intern_main">
<div id="intern_leftpart">
<p class="intern_course_heading">Machine Learning : The Demand Of Future</p>
    
     <div id="ratingcontainer">
            
               <img class="intern_rating" src={Rating} alt="sorry" />
             <p class="intern_ratinggrade">4.0</p>
              <p class="intern_ratingno">75 Rating</p>
              <p class="intern_ratingreview">18 Reviews</p>
    </div>

    <div id="intern_guide">
        <p class="guide_heading">In this course:</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;	You will get through python.</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;You will do data analysis</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;You will go through data visualisation</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;You will implement different algorithms</p>
    </div>
    
    <div id="leftside_icon_main">
     
       <p class="left_sideicon_para"><span><img src={clock} class="left_side_icons"/></span>&nbsp;&nbsp;4 months</p>
       <p class="left_sideicon_para"><span><img src={download} class="left_side_icons"/></span>&nbsp;&nbsp;No download needed</p>
       <p class="left_sideicon_para"><span><img src={certificate} class="left_side_icons"/></span>&nbsp;&nbsp;Certificate of Completion</p>
       <p class="left_sideicon_para"><span><img src={realproject} class="left_side_icons"/></span>&nbsp;&nbsp; 4 minor & 3 major Projects</p>
       <p class="left_sideicon_para"><span><img src={splitscreenvideo} class="left_side_icons"/></span>&nbsp;&nbsp;Split-screen video</p>
       <p class="left_sideicon_para"><span><img src={anydevice} class="left_side_icons"/></span>&nbsp;&nbsp;Accessible on any device</p>
       <p class="left_sideicon_para"><span><img src={flexibleplans} class="left_side_icons"/></span>&nbsp;&nbsp;Flexible schedule</p>
       <p class="left_sideicon_para"><span><img src={mentorsupport} class="left_side_icons"/></span>&nbsp;&nbsp;Assignments with mentor Support</p>
    
    </div>

</div>

<div id="intern_rightpart">
  <form >
    <p class="intern_form_heading">Lets Begin The Journey</p>
    <p class="intern_form_subheading">Fill To Enroll Now</p>
    <input type="text" class="intern_form" placeholder="Name" required/>
    <input type="text" class="intern_form" placeholder="Email" required/>
    <input type="text" class="intern_form" placeholder="Contact No" required/>
    <select class="plan_selection">
    <option value="" disabled selected>Select Plan</option>
    <option value="plan 1">Basic</option>
    <option value="plan 2">Advanced</option>
    <option value="plan 3">Premium</option>
</select>
<input type="button" class="intern_button" value="Request a Call-Back"/>
</form>

</div>
</div>


 


   </div> 
        );
    }
    }
    
    export default Coursesubject;