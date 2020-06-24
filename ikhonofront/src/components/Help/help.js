import React from 'react';
import './help.css';

function help() {
  return (
    <div className="help">
      
    <h1>Formal Contact Form</h1>
    <div id='help_second'>
      <div id="help_left">
        Contact Us On -<br/>
        Address : Delhi<br/>
        Email : info@ikhonohub.com<br/>
        Thank You<br/>
      </div>
      <div id="help_right">
        <input class='help_right_fields' type='text' placeholder='Your Name' /><br/>
        <input class='help_right_fields' type='text' placeholder='Your Email' /><br/>
        <input class='help_right_fields' type='number' placeholder='Your Phone No.' /><br/>
        <button class='help_right_button'>Send</button>
      </div>
    </div>
    
    </div>
  );
}

export default help;