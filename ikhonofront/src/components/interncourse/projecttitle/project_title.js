import React ,{Component}from 'react';
import './projecttitle.css';

const Projecttitle=({c4_1,c4_1a ,c4_1b ,c4_1c , c4_2 , c4_2a, c4_2b, c4_2c ,c4_3,c4_3a,c4_3b,c4_3c,c4_4,c4_4a,c4_4b,c4_4c,c4_5,c4_5a,c4_5b,c4_5c,c4_5d,c4_6,c4_6a,c4_6b,c4_6c,c4_7,c4_7a,c4_7b,c4_7c})=> {
    
      return (
        <div class="project_main">
        <h1 id="project_heading">Project Title</h1>
       
     <div class="project_title">
        <div id="project1">
            <h3 id="title_head1">{c4_1}</h3>
            <p id="title-para">In this project u will</p>
            <ul id="title_para1">
                <li>{c4_1a}</li>
                <li>{c4_1b}</li>
                <li>{c4_1c}</li>
                
            </ul>
        </div>
               
               
                <div id="project2">
                    <h3 id="title_head1">{c4_2}</h3>
                    <p id="title-para">In this project u will</p>
                    <ul id="title_para1">
                        <li>{c4_2a}</li>
                        <li>{c4_2b}</li>
                        <li>{c4_2c}</li>
                    </ul>
                </div>
                       
                       
                        <div id="project1">
                            <h3 id="title_head1">{c4_3}</h3>
                            <p id="title-para">In this project u will</p>
                            <ul id="title_para1">
                                <li>{c4_3a}</li>
                                <li>{c4_3b}</li>
                                <li>{c4_3c}</li>
                            </ul>
                        </div>
                                   
                                   
                                    <div id="project2">
                                        <h3 id="title_head1">{c4_4}</h3>
                                        <p id="title-para">In this project u will</p>
                                        <ul id="title_para1">
                                            <li>{c4_4a}</li>
                                            <li>{c4_4b}</li>
                                            <li>{c4_4c}</li>
                                        </ul>
                                    </div>
       </div>

       
   <div class="project_title1">
        <div id="project3">
                <h3 id="title_head1">{c4_5}</h3>
                <p id="title-para">In this project u will</p>
                <ul id="title_para1">
                    <li>{c4_5a}</li>
                    <li>{c4_5b}</li>
                    <li>{c4_5c}</li>
                    
                </ul>
            </div>
                  
                    <div id="project4">
                        <h3 id="title_head1">{c4_6}</h3>
                        <p id="title-para">In this project u will</p>
                        <ul id="title_para1">
                            <li>{c4_6a}</li>
                            <li>{c4_6b}</li>
                            <li>{c4_6c}</li>
                        </ul>
                    </div>

                            <div id="project3">
                                <h3 id="title_head1">{c4_7}</h3>
                                <p id="title-para">In this project u will</p>
                                <ul id="title_para1">
                                    <li>{c4_7a}</li>
                                    <li>{c4_7b}</li>
                                    <li>{c4_7c}</li>
                                </ul>
                            </div>
   </div>

       </div>
    

    );
}


    export default Projecttitle;