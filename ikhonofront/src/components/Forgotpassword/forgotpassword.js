import React, { Component } from 'react';
import './forgot_password.css';
import Loginnav from '../loginnav/loginnav';
import history from "../../history";
import axios from "axios";

class Forgotpassword extends Component {


  render(){
    
  return (

    <div class="forgot_password">

        {/* <div>
          <Loginnav />

      </div>
   */}
      
                  
           
        <table id='forgotting_password'>
          
                <tr>
                 <td class="forgot_password_color"><p class="forgotpassword_heading"> FORGOT YOUR PASSWORD</p></td>
               </tr>
                    <tr >
                         <td class="forgot_password_para_height"><p class="forgot_password_para"> Enter the email address with your account.<br></br>We will email you a link to reset your password</p></td>
                    </tr>

                    <tr>
                         <td class="forgot_password_para_input_height"> <input type= "text" placeholder="E-mail" class="forgot_email"></input></td>
                    </tr>

                    <tr >
                         <td class="forgot_password_para_input_height"> 
                         <button class="confirm_forgot_password_submit" >Confirm Email</button> <span class="forgot_or"> &nbsp;&nbsp;OR </span><a class="login_forgot_password_anchor"href="/login"> &nbsp;&nbsp;Login</a> 
                         </td>
                       </tr>
                      
                  
                </table>  
        
               </div>
  );

  }

}

export default Forgotpassword;