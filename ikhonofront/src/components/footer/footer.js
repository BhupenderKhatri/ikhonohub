import React , {Component}  from 'react' ;
import './newfooter.css' ;
import Facebook from './facebook.png';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Youtube from './youtube.png';
import Twitter from './twitter.png';

import Privacy from '../PrivacyPolicy/privacy';
import history from '../../history';

class newfooter extends Component{
    render(){
      return(
          <div >
             <div id="anchor_one">
                         <a href="youtube.com">    ABOUT US &nbsp;&nbsp; <span> | </span></a> &nbsp;&nbsp;
                            
                         <a href="youtube.com"> 
                               CONTACT US</a>
                             
             </div>
             <div class="row">
                              <div class="column"> < a href="https://www.facebook.com/Ikhono-Hub-101845231477935">  <img src= {Facebook}  alt="Error"></img> </a></div>
                              <div class="column">< a href="https://www.linkedin.com/company/ikhonohub">  <img src= {Linkedin}  alt="Error"></img> </a></div>
                              <div class="column">< a href="https://www.instagram.com/ikhonohub">  <img src= {Instagram}  alt="Error"></img> </a></div>
                              <div class="column">  < a href="https://www.youtube.com/channel/UCTXNRNBIOxfGA_qTU7shi0w/featured">  <img src= {Youtube}  alt="Error"></img> </a></div>
                              <div class="column">  < a href="">  <img src= {Twitter}  alt="Error"></img> </a>  </div>    
             </div>
    <div class="footer">
          <h3 id="issueone">COPYWRITE Ⓒ 2020 , IKHONO HUB</h3>
   
         
         
          <div id="issuetwo"> <a onClick={()=>history.push('/privacy')}>
                                PRIVACY &nbsp;&nbsp; <span> | </span></a> 
                            
             <a onClick={()=>history.push('/privacy')}>
             &nbsp;&nbsp;   TERMS
                              </a>
             </div>

</div>



        </div>

      );
    }
}
export default newfooter;