import React from 'react';
import './newaddress.css';

const newaddress = () => {
    return (
        <div id='new'>
            <div id='new1'>
                <h1>Manage Address</h1>
                <input refs="address" type="text" size="30" placeholder="+ ADD A New Address"/>
                </div>
            <div id='new2'>
            <input refs="name" type="text" size="30" placeholder="Name"/> <input refs="number" type="text" size="30" placeholder="Phone Number"/>
             </div>
             <div id='new3'>
             <input refs="pincode" type="text" size="30" placeholder="Pincode"/> <input refs="locality" type="text" size="30" placeholder="Locality"/>
             </div>
             <div id='new4'>
             <textarea refs="message" cols="40" rows="3"
                 className="comments" placeholder="Message"/>
                 </div>
                 <div id='new5'>
                 <input refs="name" type="text" size="30" placeholder="city/district/town"/>
                 <select id = "dropdown">
                <option value="N/A">select state</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Orissa">Orissa</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttaranchal">Uttaranchal</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                 </select>
                 <div id='new6'>
            <input refs="landmark" type="text" size="30" placeholder="Landmark(optional)"/> <input refs="number" type="text" size="30" placeholder="Alternate(phone no)"/>
            </div>
            <div id='new7'>
               <input type="radio" value="Home" checked={''} /> Home  <input type="radio" value="Work" checked={''} /> Work
            </div>
            <button className="btn" id="save"
              value="Submit">Save</button> 
              <div id='new8'>
              <p> Cancel </p>
          </div>
                </div>
                </div>
                );
}
export default newaddress ;