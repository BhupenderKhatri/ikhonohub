import React from 'react';
import './help.css';

function help() {
  return (
    <div className="dashboardhelp">
      
    <h1 id="dashboard-help-heading">Formal Contact Form</h1>
    <div id='dashboardhelp_second'>
      <div id="dashboardhelp_left">
       <p id="dashboardhelp_left_content" >Contact Us On - 8248415788, 92223450</p> 
        <p id="dashboardhelp_left_content"> Address : SRM university Delhi NCR Sonipat</p>
       <p id="dashboardhelp_left_content"> Email : info@ikhonohub.com</p>
        <p id="dashboardhelp_left_content"><strong>Thank You :)</strong></p>
      </div>
      <div id="dashboardhelp_right">
        <input class='dashboardhelp_right_fields' type='text' placeholder='Your Name' /><br/>
        <input class='dashboardhelp_right_fields' type='text' placeholder='Your Email' /><br/>
        <input class='dashboardhelp_right_fields' type='number' placeholder='Your Phone No.' /><br/>
        <button class='dashboardhelp_right_button'>Send</button>
      </div>
    </div>
    
    </div>
  );
}

export default help;