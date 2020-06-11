import React , {Component}  from 'react' ;
import './content.css' ;
import Second from './second.png' ;
import Third from './third.png' ;
import Fourth from './fourth.png' ;
import Fifth from './fifth.png' ;
import Sixth  from './sixth.png' ;
import Seven  from './seven.png' ;

class content extends Component{
    render(){
        return(
            <div>
                <div id="headingcon">
                    <h1>What you can get by joining IKHONO HUB</h1>
                </div>
           <div id="basecontentcon">
                    <div id="infocon">
                         <h2> Build your portfolio </h2>

                           <div id="theorycon">
                           Unlike most online courses and free tutorials, you’ll be using  
                           everything you <br></br> learn to build complex, professional, real-world projects and your own<br></br>
                           professional portfolio website.
                       </div>
                       </div>
                       <div id='imgcon'>
                       
                       {<img src= {Second}  alt="Error"></img>}

                       </div>
                       </div>        
                       

           <div id="basecontent2con">
                  <div id="img2con">
                       {<img src= {Third}  alt="Error"></img>}
                      </div>
                      
                       <div id="info2con">
                       <h2>Grow your network</h2>
                           
                           <div id="theory2con">
                           Find your next opportunity, get that key introduction, even meet a <br></br>co-founder. 
                           Someone in our thriving and supportive ZTM community  <br></br>is always online willing to lend a hand.
                           </div>


                        </div>

</div>

                    <div id="basecontentcon">

                      <div id="infocon">
                           <h2> Get Hired </h2>
                            

                           <div id="theorycon">
                           You’ll gain the knowledge, confidence, experience you need to ace <br></br> interviews and receive
                            offers <br></br>from any company you can imagine.
                            </div>
                       </div>
                        
                       <div>

                       <div id="imgcon">

                       {<img src= {Fourth}  alt="Error"></img>}

                       </div>

                       </div>

  </div>  

                <div id="basecontent4con">
                      
                       <div id="img4con">
                       
                       {<img src= {Fifth}  alt="Error"></img>}

                       </div>  
                      
                       <div id="info4con">
                     
                       <h2>Get promoted ,become top 10%</h2>
                           
                           <div id="theory4con">
                           Our intermediate and advanced courses help you continue to build <br></br>your skills, advance you to senior roles and get you recognized as one <br></br> of the best developers at your company. 
                         
                       </div>
                     </div>
                  </div>

                     <div id="basecontentcon">
                    <div id="infocon">
                          
                           <h2> Never stop growing </h2>

                           <div id="theorycon">
                           We regularly release new courses and exclusive content for Ihono Hub <br></br>
                           students to make sure you stay ahead of the curve.
                       </div>
                         
                       <div id="imgcon">
                       <div id="fivecon">
                       {<img src= {Sixth}  alt="Error"></img>}
                       </div>
                       </div>
                         </div>
                         </div>

                         <div id="basecontent4con">
                      
                      <div id="img4con">
                      
                      {<img src= {Fifth}  alt="Error"></img>}

                      </div>  
                     
                      <div id="info4con">
                    
                      <h2>Learn to code, on your schedule</h2>
                          
                          <div id="theory4con">
                          Our comprehensive courses have 200+ hours (and counting) of lessons available 24/7. You’ll learn everything from beginner programming fundamentals to the most advanced concepts.
                        
                      </div>
                    </div>
                 </div>
           </div>
        );
    }
}
export default content ;