import React ,{Component}from 'react';
import './home.css';
import Slider from '../slider/slider';
import PopularCourses from '../popular_courses/popularCourses';
import MainCourses from '../mainCourses/mainCourses';
import Content from '../content/content';
import Footer from '../footer/footer';
import Nav from '../nav/nav';
 
import PictureGoal1 from "../home/Homegoalpic1.png" ;
import PictureGoal2 from "../home/Homegoalpic2.png" ;
import PictureGoal3 from "../home/Homegoalpic3.png" ;
import PictureGoal4 from "../home/Homegoalpic4.png" ;




class home extends Component{
    render(){
      
      return (
    <div id="mainbackhome" >
          <div>
           <Nav/>
          </div>
            <div id="home_about_background_color">
               <p id="homeaboutheading">About Us</p>
              
               <p class="homeaboutpara">We believe that having skills are the fundamental right for a person for his growth and quality of life. So we have initiated<br></br> our lives to giving skills to people in whatever field they want it. We are starting from engineering and will cover topics till<br></br> they end. We have just started from universities and will take it in every domain out there is in existence .</p>           
            </div>
    
         
            <div id="Homegoals" >
               <p id="home_goals_heading">Achieve Your Goals With IKHONO HUB</p>


                      
                          
                      <div class="goalshomecard">
                               <div id="goalshomecards1">
                                  
                                  <img id="picturehere" src={PictureGoal1 }/>
                                   <h2 id="goalshomecards_heading">Learn the latest <br></br>skills</h2>
                                   <p id="goalshomecards_content">like business analytics, graphic design, Python, and more</p>
                                </div>



                               <div  id="goalshomecards2"> 
                                <img id="picturehere" src={PictureGoal2 }/>
                                <h2 id="goalshomecards_heading">One-on-One Mentorship</h2>
                                <p id="goalshomecards_content">in high-demand fields like IT, AI and cloud engineering</p>
                                </div>
                             
                            
                   
                           
                            
                            
                               <div id="goalshomecards3">
                                 <img id="picturehere" src={PictureGoal3 }/>
                                 <h2 id="goalshomecards_heading">Earn a certificate or degree</h2>
                                <p id="goalshomecards_content">from a leading university in business, computer science, and more</p>
                                </div>
                               
                               <div id="goalshomecards4">
                                 <img id="picturehere" src={PictureGoal4 }/>
                                 <h2 id="goalshomecards_heading">Hands-On-Hand Intership</h2>
                                <p id="goalshomecards_content">we will make sure you have the time of your life</p>
                                 </div>

                                
                   </div>     
            
            </div>   
                   
            
           
            {/*
            <div>
            <MainCourses/>
            </div>
            */}
            <div>
             <Content/>
            </div>
            <div>
             <Footer/>
            </div>
     </div>
  );
}
}

export default home;