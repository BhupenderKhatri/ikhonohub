import React ,{Component}from 'react';
import tick from './tick.png';
import './whatyoulearn.css';

const Whatyoulearn=({c2_1,c2_2,c2_3,c2_4,c2_5,c2_6}) =>{
    
      
      return (

<div id="whatyoulearn_main">
  <div class="syllabus_heading">
<p class="learn_heading">What you'll learn</p>
{/* <input type="button" class="syllabus_download" value="DOWNLOAD SYLLABUS"/> */}
</div>
<div id="learn_para_main">
  <ul class="list_learn">
<li class="learn_para"> {c2_1}</li>
      <li class="learn_para"> {c2_2}</li>
      <li class="learn_para"> {c2_3}</li></ul>
<ul class="list_learn">
<li class="learn_para">{c2_4} </li>
<li class="learn_para">{c2_5} </li>
<li class="learn_para">{c2_6} </li>
</ul>

</div>
</div>
        );
    }
    
    
    export default Whatyoulearn;