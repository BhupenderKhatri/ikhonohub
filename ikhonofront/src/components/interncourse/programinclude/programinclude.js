import React ,{Component}from 'react';
import './programinclude.css';
import Studying from '../programinclude/studying.png';
import Career from '../programinclude/career.png';
import Candidate from '../programinclude/candidate.png';
import Developer from '../programinclude/developer.png';

class Programinclude extends Component{
    render(){
      
      return (
<div class="program_main">
    <h1 id="program_main_head">All Our Programs Include</h1>
        <div class="program_title">
                <div id="program1">
                    <img id="program_img1" alt="study" src={Studying}/>
                   <div id="program_base"> <h3 id="program_title">Projects with Practical skills</h3>
                  <p id="program_para">We provide you with different projects which will lead you through a real time industry experience</p>
                  </div>
                </div>
                     
                     
                      <div id="program2"> 
                        <img id="program_img1" alt="study" src={Candidate}/>
                      <div id="program_base">  
                        <h3 id="program_title">Mentor Support</h3>
                        <p id="program_para">What to do if you are stuck at a point in the course?
                        No worries our mentor will be there to help you with all of your doubts.
                        </p>
                      </div>
                      </div>


                              <div id="program1">
                             <img id="program_img1" alt="study" src={Career}/>
                             <div id="program_base"> 
                                <h3 id="program_title">Career sessions</h3>
                                <p id="program_para">You will be able to join our special career sessions through which you will learn to build your own career path and get ur dream job.</p>
                             </div>
                              </div>


                                      <div id="program2">
                                          <img id="program_img1" alt="study" src={Developer}/>
                                      <div id="program_base"> 
                                          <h3 id="program_title">Flexible learning schedule</h3>
                                          <p id="program_para">No need to bind yourself with our schedule. You can access the whole course at your place ,at your time. We provide you the facility to access your course at your comfort zone.</p>
                                      </div>
                                      </div>

                          


        </div>
</div>
  );
  }
}
        
export default Programinclude;