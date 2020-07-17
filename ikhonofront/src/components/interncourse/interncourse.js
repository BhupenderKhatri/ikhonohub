import React ,{Component}from 'react';
// import Internnav from '../interncourse/internnav/internnav';
import Nav from '../nav/nav';
import './interncourse.css';
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
import Whatyoulearn from '../interncourse/whatyoulearn';
import Conceptcover from '../interncourse/conceptcover';
class Interncourse extends Component{
    render(){
      
      return (
         <div>
            
<div>
  <Nav/>
  </div> 

  <div id="intern_main">
<div id="intern_leftpart">
<p class="intern_course_heading">The Complete Study Of Web Development 2020: Zero to Mastery</p>
    
     <div id="ratingcontainer">
            
               <img class="intern_rating" src={Rating} alt="sorry" />
             <p class="intern_ratinggrade">4.0</p>
              <p class="intern_ratingno">75 Rating</p>
              <p class="intern_ratingreview">18 Reviews</p>
    </div>

    <div id="intern_guide">
        <p class="guide_heading">In this Guided Project, you will:</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;You'll understand the major features of HTML,CSS.</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;You'll be able to apply HTML,CSS in practical situations.</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;You'll learn how to fix every problem caused by this.</p>
    </div>
    
    <div id="leftside_icon_main">
     
       <p class="left_sideicon_para"><span><img src={clock} class="left_side_icons"/></span>&nbsp;&nbsp;2 hours</p>
       <p class="left_sideicon_para"><span><img src={download} class="left_side_icons"/></span>&nbsp;&nbsp;No download needed</p>
       <p class="left_sideicon_para"><span><img src={certificate} class="left_side_icons"/></span>&nbsp;&nbsp;Certificate of Completion</p>
       <p class="left_sideicon_para"><span><img src={realproject} class="left_side_icons"/></span>&nbsp;&nbsp;Real-world Projects</p>
       <p class="left_sideicon_para"><span><img src={splitscreenvideo} class="left_side_icons"/></span>&nbsp;&nbsp;Split-screen video</p>
       <p class="left_sideicon_para"><span><img src={anydevice} class="left_side_icons"/></span>&nbsp;&nbsp;Any device</p>
       <p class="left_sideicon_para"><span><img src={flexibleplans} class="left_side_icons"/></span>&nbsp;&nbsp;Flexible plans</p>
       <p class="left_sideicon_para"><span><img src={mentorsupport} class="left_side_icons"/></span>&nbsp;&nbsp;Mentor Support</p>
    
    </div>

</div>

<div id="intern_rightpart">
  <form >
    <p class="intern_form_heading">Lets Begin The Journey</p>
    <p class="intern_form_subheading">Fill To Enroll Now</p>
    <input type="text" class="intern_form" placeholder="Name" required/>
    <input type="text" class="intern_form" placeholder="Email" required/>
    <input type="text" class="intern_form" placeholder="Number" required/>
    <select class="plan_selection">
    <option value="" disabled selected>Categories</option>
    <option value="plan 1">Plan 1</option>
    <option value="plan 2">Plan 2</option>
    <option value="plan 3">Plan 3</option>
</select>
<input type="button" class="intern_button" value="Request a Call-Back"/>
</form>

</div>
</div>


<div>
<Whatyoulearn/>
</div>

<div>
<Conceptcover/>
</div>


   </div> 
        );
    }
    }
    
    export default Interncourse;