import React from 'react';
import './pancardinfo.css';

const pancardinfo = () => {
    return (
        <div id='pan'>
            <div id='pan1'>
                <h1>PAN Card Information</h1>
                <input refs="PAN" type="text" size="30" placeholder="PAN Number"/>
            </div>
            <div id='pan2'>
            <input refs="name" type="text" size="30" placeholder="Full Name"/>
            </div>
            <div id='pan3'>
            <textarea refs="message" cols="40" rows="3"
                className="comments" placeholder="upload your pan here"/>
                </div>
                <div id='pan4'>
               <p> <input type="checkbox"/> I do hereby declare that PAN furnished/stated above is correct and belons to me, registerd as an account holder with www.ikhonohub.com.I further declare that i shall solely be held responsible  for the consequences, in case of any fake PAN deceleration.</p>
              </div>
              <button className="btn" id="submit"
              value="Submit">Upload</button>
              <div id='pan5'>
                  <p> Read Terms & Conditions of PAN Card Information</p>
              </div>
</div>
   );
}
export default pancardinfo;