import React ,{Component}from 'react';
import tick from './tick.png';
import './whatyoulearn.css';
class Whatyoulearn extends Component{
    render(){
      
      return (

<div id="whatyoulearn_main">
<p class="learn_heading">What you'll learn
<span><input type="button" class="syllabus_download" value="DOWNLOAD SYLLABUS"/></span></p>
<div id="learn_para_main">
<p class="learn_para"><span><img src={tick} class="tick_icon"></img></span> &nbsp;Skills that will allow you to apply for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jobs like: Web Developer, Software &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developer, Front End Developer, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Javascript Developer, and Full Stack &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Developer</p>
<p class="learn_para"><span><img src={tick} class="tick_icon"></img></span> &nbsp;Build 10+ real world Web &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development projects you can show &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;off</p>
<p class="learn_para"><span><img src={tick} class="tick_icon"></img></span> &nbsp;Learn modern technologies that are &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTUALLY being used behind tech &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;companies in 2020</p>
<p class="learn_para"><span><img src={tick} class="tick_icon"></img></span> &nbsp;Build a professional Portfolio Website</p>
<p class="learn_para"><span><img src={tick} class="tick_icon"></img></span> &nbsp;Master modern Web Development &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fundamentals as well as advanced &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;topics</p>
</div>
</div>
        );
    }
    }
    
    export default Whatyoulearn;