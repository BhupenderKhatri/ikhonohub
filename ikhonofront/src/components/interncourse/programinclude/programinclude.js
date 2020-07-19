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
                   <div id="program_base"> <h3 id="program_title">Real-world projects from industry experts</h3>
                  <p id="program_para">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want.</p>
                  </div>
                </div>
                     
                     
                      <div id="program2"> 
                        <img id="program_img1" alt="study" src={Candidate}/>
                      <div id="program_base">  
                        <h3 id="program_title">Technical mentor support</h3>
                        <p id="program_para">Our knowledgeable mentors guide your learning and are focused on answering your questions, motivating you and keeping you on track.</p>
                      </div>
                      </div>


                              <div id="program3">
                             <img id="program_img1" alt="study" src={Career}/>
                             <div id="program_base"> 
                                <h3 id="program_title">Personal career coach and career services</h3>
                                <p id="program_para">You’ll have access to career coaching sessions, interview prep advice, and resume and online professional profile reviews to help you grow in your career.</p>
                             </div>
                              </div>


                                      <div id="program4">
                                          <img id="program_img1" alt="study" src={Developer}/>
                                      <div id="program_base"> 
                                          <h3 id="program_title">Flexible learning program</h3>
                                          <p id="program_para">Get a custom learning plan tailored to fit your busy life. Learn at your own pace and reach your personal goals on the schedule that works best for you.</p>
                                      </div>
                                      </div>

                          


        </div>
</div>
  );
  }
}
        
export default Programinclude;