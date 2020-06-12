import React from 'react';
import './profileinfo.css';

const profileinfo = () => {
    return (
 <div >
        
            <div id='info1pro'>
                <h2>Personal Details</h2>
                <input class="perinputpro" type="text" name="title" value={''}/>  <input class="perinputpro" type="text" name="title" value={''}  />
           
                {/* your gender */}
               
                <h2>Your Gender</h2>
                   <input   type="radio" value="male" checked={''} /> Male <input id="info2pro" type="radio" value="female" checked={''} /> Female 
                     
                 {/* email Details        */}
                
                <h2>Email Address</h2>
                <input class="perinput1pro" refs="email" type="text" size="30" placeholder="Email"/>
                      
               {/* Mobile Details */}
                   
                    <h2>Mobile Number</h2>
                    <input class="perinputpro" refs="phone" type="text" size="30" placeholder="Phone"/>
               
            </div>
            
</div>
        
    );
}
export default profileinfo;