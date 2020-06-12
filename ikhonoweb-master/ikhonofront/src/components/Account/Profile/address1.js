import React from 'react';
import './address.css';

const addressinfo = () => {
    return (
        <div id='add'>
            <div id='add1'>
                <h1>Manage Address</h1>
                <input refs="address" type="text" size="30" placeholder="+ ADD A New Address"/>
                <textarea refs="Address" cols="40" rows="5"
                className="comments" placeholder="Address"/>
                <textarea refs="Address" cols="40" rows="5"
                className="comments" placeholder="Address"/>
                </div>
             
         </div>    
            );
        }
        export default addressinfo;