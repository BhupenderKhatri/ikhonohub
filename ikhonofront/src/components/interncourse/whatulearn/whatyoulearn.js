import React ,{Component}from 'react';
import tick from './tick.png';
import './whatyoulearn.css';
class Whatyoulearn extends Component{
    render(){
      
      return (

<div id="whatyoulearn_main">
  <div class="syllabus_heading">
<p class="learn_heading">What you'll learn</p>
<input type="button" class="syllabus_download" value="DOWNLOAD SYLLABUS"/>
</div>
<div id="learn_para_main">
  <ul class="list_learn">
<li class="learn_para"> Get an exposure on how to work on real time problems.</li>
<li class="learn_para"> How to implement machine learning models</li>
<li class="learn_para"> How to use machine learning in different aspects</li></ul>
<ul class="list_learn">
<li class="learn_para"> How Machine learning can help you in your future</li>
<li class="learn_para"> Skills which which will help you to secure a job as machine learning engineer</li>
<li class="learn_para"> Build a professional portfolio</li>
</ul>

</div>
</div>
        );
    }
    }
    
    export default Whatyoulearn;