import React from 'react';
import './giftcard.css';

const giftcard = () => {
    return (
 <div id='gifcp'>
      
      <div id='gift1cp'>
          
                <h2>Buy A Gift Card</h2>
                <div >      <input id='gif2cp' type="text" name="title" value={'Receivers Email'}/></div>
           
                <div >
                  <input id='gif2cp'type="text" name="title" value={'Receivers Name'}/>
                </div>
                    <div >
                       <input id='gif3cp' type="text" name="title" value={'Card value in ₹'}/>
                {/*<select id = "dropdown">
                <option value="N/A">select</option>
                <option value="1">500</option>
                <option value="2">1000</option>
                <option value="3">1500</option>
                <option value="4">2000</option>
    </select>*/}
                     <input id='gif4cp' type="text" name="title" value={'No. of cards'}/>
                  </div>
              <div>
                  <textarea id='gif5cp' refs="message" cols="20" rows="2"
                 placeholder="Gift Name (optional)"/>
              </div>
                  <div>
                      <textarea id='gif6cp' refs="message" cols="20" rows="2"
                        placeholder=" Write message (optional)"/>
                   </div>
                   <button class="gif7cp" value="Submit">BUY GIFT CARD FOR ₹ 0</button>

     </div>       
</div>
        
    );
}
export default giftcard;