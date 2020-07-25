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
import axios from 'axios';


class  Coursesubject extends Component{

  constructor(props){

    super(props);

    this.state={
      userId:props.id,
      userName:'',
      userEmail:'',
      userContact:'',
      userPlan:''
     
    }
  }

onNameChange=(event)=>{

    this.setState({userName:event.target.value});
}

onEmailChange=(event)=>{

  this.setState({userEmail:event.target.value});
    
}

onContactNoChange=(event)=>{
    this.setState({userContact:event.target.value});
}

onPlanChange=(event)=>{
    this.setState({userPlan:event.target.value});    
}

onUserClick=(event)=>{
  
    const headers = {
           
      "Content-Type": "application/json"
  }
    console.log('form submit',this.state);
    axios.post('http://localhost:5000/users/CallUserfordetail',this.state,{headers: headers}).then(res => {

      console.log('POST response', res);
      alert("Succesfully Registered your request. We will contact you as soon as possible.")
  })
 }
  

  render(){

      const {id,c1_1,c1_2,c1_3,c1_4,c1_5,c1_6,c1_7,c1_8,c1_9,c1_10,c1_11,c1_12,c1_13,c1_14,c1_15,c1_16} = this.props ;
      return (
         <div>
            
 
<div class="coursesub-black"></div>
  <div id="intern_main">
<div id="intern_leftpart">
<p class="intern_course_heading">{c1_1}</p>
    
     <div id="ratingcontainer">
            
               <img class="intern_rating" src={Rating} alt="sorry" />
      <p class="intern_ratinggrade">{c1_2}</p>
      <p class="intern_ratingno">{c1_3}</p>
      <p class="intern_ratingreview">{c1_4}</p>
    </div>

    <div id="intern_guide">
        <p class="guide_heading">In this course:</p>
      <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp; {c1_5}</p>
        <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp; {c1_6}</p>
      <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp; {c1_7}</p>
      <p class="guide_detail"><span><img src={tick} class="tick_icon"></img></span> &nbsp;{c1_8}</p>
    </div>
    
    <div id="leftside_icon_main">
     
      <p class="left_sideicon_para"><span><img src={clock} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_9}</p>
      <p class="left_sideicon_para"><span><img src={download} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_10}</p>
      <p class="left_sideicon_para"><span><img src={certificate} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_11}</p>
      <p class="left_sideicon_para"><span><img src={realproject} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_12}</p>
      <p class="left_sideicon_para"><span><img src={splitscreenvideo} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_13}</p>
      <p class="left_sideicon_para"><span><img src={anydevice} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_14}</p>
      <p class="left_sideicon_para"><span><img src={flexibleplans} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_15}</p>
      <p class="left_sideicon_para"><span><img src={mentorsupport} class="left_side_icons"/></span>&nbsp;&nbsp;{c1_16}</p>
    
    </div>

</div>

<div id="intern_rightpart">
  <form >
    <p class="intern_form_heading">Lets Begin The Journey</p>
    <p class="intern_form_subheading">Fill To Enroll Now</p>
    <input type="text" class="intern_form" placeholder="Name" 
    onChange={this.onNameChange}  
    required/>
    <input type="text" class="intern_form" placeholder="Email" 
    onChange={this.onEmailChange}
    required/>
    <input type="text" class="intern_form" placeholder="Contact No"
    onChange={this.onContactNoChange}
    required/>
    <select value={this.state.selectValue} onChange={this.onPlanChange} class="plan_selection">
    <option value="" disabled selected>Select Plan</option>
    <option value="Basic">Basic</option>
    <option value="Advanced">Advanced</option>
    <option value="Premium">Premium</option>
</select>
<input type="button" class="intern_button" onClick={this.onUserClick} value="Request a Call-Back"/>
</form>

</div>
</div>

   </div> 
        );
    }
  }
    export default Coursesubject;