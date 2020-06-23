import React from 'react';
import './verification.css';
import Verify_image from './email.png';
function verification() {
  return (
    <div className="verification_main">
  
  <table id='verification_table'>
          
          <tr>
           <td class="verification_heading_color"><p class='verify_img_fix'><img src={ Verify_image} class="verification_image"/> </p></td>
         </tr>
              <tr >
                   <td ><p class="verify_email_address"> Verify your email address</p> </td>
              </tr>

              <tr>
                   <td > <h4 class="verify_email_welcome"> Welcome to IKHONO HUB</h4></td>
              </tr>
             
              <tr>
                   <td > <h4 class="verify_email_please"> Please click the below to confirm your<br></br>email address and activate your account</h4></td>
              </tr>

              <tr >
                   <td > 
                  <p class="verify_button_fix"><button class="verify_email_submit" >Confirm Email</button></p>  </td>
            </tr>

            <tr>
                   <td > <p class="verify_email_error"> If you received this in error, simply ignore this email and <br></br> do not click the button</p></td>
              </tr>

          </table>  
    </div>
  );
}

export default verification;