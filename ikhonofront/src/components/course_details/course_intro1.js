import React from 'react';
import './course_intro.css' ;
import Time from './Icontime.png';
import Video from './Iconvideo.png';
import Cloud from './Iconcloud.png';
import Devices from './Icondevices.png';
import StarRatingComponent from 'react-star-rating-component';

const Intro = ({head,para , subtitle,creator }) => {
    return (
      <div id="courseintro1_main">
      <div id="courseintro1_left">
          <h1 class="headmain">{head}</h1>
          <h1 class="headsubmain">{subtitle}</h1>
          <p  id="coursestar">
          <StarRatingComponent 
          name="rate2" 
          editing={false}
         
          starCount={5}
          value={5}
        />
        </p>
          <p id="stylingreviews">{para}</p>
        </div>
        <div id="courseintro1_right">
        <h1 class="headrightupper">In this guided project,you will:</h1>
        <ul>
        <li class="styling1">&nbsp; You'll understand the major feature of HTML,CSS.</li>
        <li class="styling1">&nbsp; You'll able to apply HTML,CSS in practical situation.</li>
        <li class="styling1">&nbsp; You'll learn how to fix every problem caused by this.</li>
        </ul>
        <hr class="course_detail_danda"></hr>
        
          <img  class="course_deatil_time_icon"src={Time} alt="sorry"/><p class="course_details_icon_detail">2 hours</p>
          <img  class="course_deatil_time_icon1"src={Cloud} alt="sorry"/><p class="course_details_icon_detail1">No download needed</p>
         
        <img  class="course_deatil_time_icon2"src={Video} alt="sorry"/><p class="course_details_icon_detail2">Split-screen video</p>
          <img  class="course_deatil_time_icon3"src={Devices} alt="sorry"/><p class="course_details_icon_detail3">Any device</p>
         </div>
        <button class="stylingbutton_start">Start Your Course</button>
      </div>
    );
  }

export default Intro;

