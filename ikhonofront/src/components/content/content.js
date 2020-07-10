import React , {Component}  from 'react' ;
import './content.css' ;
import One from './one.png';
import Two from './two.png';
import Three from './three.png';
import Four from './four.png';
import Five from './five.png';
import Six from './six.png';

class content extends Component{
    render(){
        return(
    <div>
         <div>
              <h1 id="cont_headcontent">What you can get by joining IKHONO HUB</h1>
         </div>
                {/* first content */}
                <div id="cont_maincontent1">
                    <div >{<img id="img_content1" src= {One}  alt="Error"></img>}</div>
                        <div id="base_detail1" >
                            <h2 id="cont_headdetail1"> Build your portfolio </h2>
                                    <div id="cont_detailinside1">
                                            Unlike most online courses and free tutorials,<br></br> you’ll be using  
                                            everything you  learn to build<br></br> complex, professional, real-world projects and<br></br> your own
                                            professional portfolio website.
                                    </div>
                        </div>  
                    
                </div>        
                       

 {/* second content */}

    <div id="cont_maincontent2">                    
             <div id="base_detail2">
                 <h2 id="cont_headdetail2">Grow your network</h2>
                   <div id="cont_detailinside2">
                               Find your next opportunity, get that key introduction,<br></br> even meet a co-founder. 
                           Someone in our thriving<br></br> and supportive ZTM community is always <br></br>online willing to lend a hand.
                   </div>

                
            </div>
        <div>{<img id="img_content2" src= {Two}  alt="Error"></img>}</div>
    </div>

 {/* third content */}
      <div id="cont_maincontent3">
                 <div >{<img id="img_content3" src= {Three}  alt="Error"></img>}</div>  
            <div id="base_detail3">
                    <h2 id="cont_headdetail3"> Get Hired </h2>                       
                        <div id="cont_detailinside3">
                                You’ll gain the knowledge, confidence,<br></br> experience you need to ace  interviews and<br></br>  receive offers from any company<br></br>  you can imagine.
                        </div>
               </div>                         
    </div>  
           
            {/* fourth content */}
         <div id="cont_maincontent4">          
                <div  id="base_detail4">                            
                    <h2 id="cont_headdetail4">Get promoted ,become top 10%</h2>      
                        <div id="cont_detailinside4">
                             Our intermediate and advanced courses help you<br></br> continue to build your skills, advance you to senior<br></br> roles and get you recognized as one of the best<br></br> developers at your company. 
                        </div>
                </div>
                     <div>{<img id="img_content4"  src= {Four}  alt="Error"></img>}</div> 
         </div>


 {/* five content */}

  <div id="cont_maincontent5"> 
       <div> {<img id="img_content5" src= {Five}  alt="Error"></img>}</div> 
          <div id="base_detail5">
                <h2 id="cont_headdetail5"> Never stop growing </h2>
                    <div id="cont_detailinside5">
                            We regularly release new courses and exclusive<br></br> content for Ihono Hub 
                            students to make<br></br> sure you stay ahead of the curve.
                    </div> 
            </div>                    
  </div>

 {/* sixth content */}

        <div id="cont_maincontent6" >                     
                <div id="base_detail6">
                    <h2 id="cont_headdetail6">Learn to code, on your schedule</h2>
                        <div id="cont_detailinside6">
                            Our comprehensive courses have 200+ hours of<br></br> lessons available 24/7. You’ll learn everything from<br></br> beginner programming fundamentals to the <br></br>most advanced concepts. 
                        </div>
                </div>
            <div>{<img id="img_content6" src= {Six}  alt="Error"></img>}</div>
        </div>

</div>
         
        );
    }
}
export default content ;