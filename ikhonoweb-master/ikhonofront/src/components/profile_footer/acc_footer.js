import React , {Component}  from 'react' ;
import './acc_footer.css' ;
import Facebook from './facebook.png';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Youtube from './youtube.png';
import Twitter from './twitter.png';

class newfooter extends Component{
    render(){
      return(
          <div >
             {/* <div id="account_anchor_one">
                         <a href="youtube.com">    ABOUT US &nbsp;&nbsp; <span> | </span></a> &nbsp;&nbsp;
                            
                         <a href="youtube.com"> 
                               CONTACT US</a>
                             
             </div> */}
          {/* <div class="account_row">
            <div class="account_column"> < a href="https://www.facebook.com/Ikhono-Hub-101845231477935">  <img src= {Facebook}  alt="Error"></img> </a></div>
            <div class="account_column">< a href="https://www.linkedin.com/company/ikhonohub">  <img src= {Linkedin}  alt="Error"></img> </a></div>
            <div class="account_column">< a href="https://www.instagram.com/ikhonohub">  <img src= {Instagram}  alt="Error"></img> </a></div>
            <div class="account_column">  < a href="https://www.youtube.com/channel/UCTXNRNBIOxfGA_qTU7shi0w/featured">  <img src= {Youtube}  alt="Error"></img> </a></div>
            <div class="account_column">  < a href="">  <img src= {Twitter}  alt="Error"></img> </a>  </div>    
             </div> */}
          <div >
            <h3 id="account_issueone">COPYWRITE Ⓒ 2020 , IKHONO HUB</h3>
   
         
         
            {/* <div id="account_issuetwo"> <a href="https://www.google.co.in/">
                                PRIVACY &nbsp;&nbsp; <span> | </span></a> 
                            
             <a href="https://www.youtube.com/">
             &nbsp;&nbsp;   TERMS
                              </a>
             </div> */}

</div>



        </div>

      );
    }
}
export default newfooter;