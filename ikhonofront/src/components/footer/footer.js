import React , {Component}  from 'react' ;
import './newfooter.css' ;
import Facebook from './facebook.png';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Youtube from './youtube.png';
import Ikhonohub from '../footer/LogoWhite.png';

import Privacy from '../PrivacyPolicy/privacy';
import history from '../../history';

class newfooter extends Component{
    render(){
      return(
          <div id="footer_main_container">
          
            {/* firsts div starts here */}
            <div id="footer_container_one">
              <img class="footer_image_ikonohub" src={Ikhonohub} alt="nikal be"></img>
            </div>

            {/* //second div starts here */}
            <div id="footer_nav_options">
              <a href  class="footer_options"> Home</a>
              <hr class="footer_option_underline"></hr>
               <a href class="footer_options"> About Us</a>
               <hr class="footer_option_underline"></hr>
               <a href class="footer_options"> Contect Us</a>
               <hr class="footer_option_underline"></hr>
               <a href class="footer_options"> Privacy and Terms</a>
            </div>

            {/* third div starts here */}
            <div id="footer_follow_content">
              <p class="footer_follow_heading">Follow Us On</p>
              <p class="footer_follow_mini_para">Please follow us on our social media <br></br> profile to get updates</p>
              <div id="footer_follow_images">
              <a class="footer_link" href="https://www.facebook.com/"><img class="footer_follow_image_logo" src={Facebook} alt="nikal be"></img></a>
              <a class="footer_link" href="https://www.linkedin.com/"> <img class="footer_follow_image_logo"  src={Linkedin} alt="nikal be"></img></a>
              <a class="footer_link" href="https://www.instagram.com/"> <img class="footer_follow_image_logo"  src={Instagram} alt="nikal be"></img></a>
              <a class="footer_link" href="https://www.youtube.com/"> <img class="footer_follow_image_logo"  src={ Youtube} alt="nikal be"></img></a>
              </div>
            </div>

            {/* fourth div starts here */}
            <div id="footer_help">
            <p class="footer_help_heading">Need Help</p>
              <p class="footer_help_contact_details"> B-15 MAHENDRA PARK DELHI 110033 <br></br>Email : info@ikhonohub.com</p>

            </div>
         </div>




      );
    }
}
export default newfooter;