import React from 'react';
import './help.css';

function help() {
  return (
    <div className="dashboardhelp">
      
    <h1>Formal Contact Form</h1>
    <div id='dashboardhelp_second'>
      <div id="dashboardhelp_left">
        Contact Us On -<br/>
        Address : Delhi<br/>
        Email : info@ikhonohub.com<br/>
        Thank You<br/>
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