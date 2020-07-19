import React ,{Component}from 'react';
import './programinclude.css';
import Studying from '../programinclude/studying.png';
import Career from '../programinclude/career.png';
import Candidate from '../programinclude/candidate.png';
import Developer from '../programinclude/developer.png';

const Programinclude =({c5_1,c5_2,c5_3,c5_4,c5_5,c5_6,c5_7,c5_8})=>{
    
      
      return (
<div class="program_main">
    <h1 id="program_main_head">All Our Programs Include</h1>
        <div class="program_title">
                <div id="program1">
                    <img id="program_img1" alt="study" src={Studying}/>
      <div id="program_base"> <h3 id="program_title">{c5_1}</h3>
      <p id="program_para">{c5_2}</p>
                  </div>
                </div>
                     
                     
                      <div id="program2"> 
                        <img id="program_img1" alt="study" src={Candidate}/>
                      <div id="program_base">  
      <h3 id="program_title">{c5_3}</h3>
                        <p id="program_para">{c5_4}
                        </p>
                      </div>
                      </div>


                              <div id="program1">
                             <img id="program_img1" alt="study" src={Career}/>
                             <div id="program_base"> 
      <h3 id="program_title">{c5_5}</h3>
      <p id="program_para">{c5_6}</p>
                             </div>
                              </div>


                                      <div id="program2">
                                          <img id="program_img1" alt="study" src={Developer}/>
                                      <div id="program_base"> 
      <h3 id="program_title">{c5_7}</h3>
      <p id="program_para">{c5_8}</p>
                                      </div>
                                      </div>

                          


        </div>
</div>
  );
}
        
export default Programinclude;