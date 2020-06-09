import React from 'react';
import './address.css';

const addressinfo = () => {
    return (
        <div id='addcp'>
         
            <div id='add1cp'>
                <h2>Manage Address</h2>
            <a href="/newaddress" ><button id="aacp" class="address" >+ Add A New Address</button></a>
             
              <textarea id="add2cp" refs="Address" cols="40" rows="5"
             placeholder="Address"/>  
               
                <textarea id="add2cp" refs="Address" cols="40" rows="5"
                 placeholder="Address"/>
            </div>
             
         </div>    
            );
        }
        export default addressinfo;