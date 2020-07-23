import React , {Component}  from 'react' ;
import './internfooter.css' ;
import Facebook from './facebook.png';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Youtube from './youtube.png';
import Ikhonohub from '../footer/LogoWhite.png';


class internfooter extends Component{
    render(){
      return(
          <div id="footer_main_container1">
          
            {/* firsts div starts here */}
            <div id="footer_container_one1">
              <img class="footer_image_ikonohub1" src={Ikhonohub} alt="nikal be"></img>
            </div>

            {/* //second div starts here */}
            <div id="footer_nav_options1">
              <a href  class="footer_options1"> Home</a>
              <hr class="footer_option_underline1"></hr>
               <a href class="footer_options1"> About Us</a>
               <hr class="footer_option_underline1"></hr>
               <a href class="footer_options1"> Contect Us</a>
               <hr class="footer_option_underline1"></hr>
               <a href class="footer_options1"> Privacy and Terms</a>
            </div>

            {/* third div starts here */}
            <div id="footer_follow_content1">
              <p class="footer_follow_heading1">Follow Us On</p>
              <p class="footer_follow_mini_para1">Please follow us on our social media <br></br> profile to get updates</p>
              <div id="footer_follow_images1">
              <a class="intern_footer_link" href="https://www.facebook.com/Ikhono-Hub-101845231477935/"> <img class="footer_follow_image_logo1" src={Facebook} alt="nikal be"></img></a>
              <a class="footer_link" href="https://www.linkedin.com/company/ikhonohub/?viewAsMember=true"><img class="footer_follow_image_logo1"  src={Linkedin} alt="nikal be"></img></a>
              <a class="footer_link" href="https://instagram.com/ikhonohub?igshid=1jauyzvbjvao6"><img class="footer_follow_image_logo1"  src={Instagram} alt="nikal be"></img></a>
              <a class="footer_link" href="https://www.youtube.com/channel/UCTXNRNBIOxfGA_qTU7shi0w"> <img class="footer_follow_image_logo1"  src={ Youtube} alt="nikal be"></img></a>
              </div>
            </div>

            {/* fourth div starts here */}
            <div id="footer_help1">
            <p class="footer_help_heading1">Need Help</p>
              <p class="footer_help_contact_details1">Contact : 9654439851 <br></br>B-15 MAHENDRA PARK DELHI 110033 <br></br>Email : info@ikhonohub.com</p>

            </div>
         </div>




      );
    }
}
export default internfooter;