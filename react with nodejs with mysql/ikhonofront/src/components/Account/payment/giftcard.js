import React, { Component } from 'react';
import './giftcard.css';
import axios from 'axios';

class giftcard extends Component {

    constructor(props)
    {
          
        super(props);

        this.state={
            reciever_email:'',
             receiver_name:'',
             value:'',
            //  no_of_cards: '',
             gift_name: '',
             message: ''


        }
   }

   Ongiftreciever_email=(event)=>{
    this.setState({reciever_email:event.target.value});
}

   Ongiftreceiver_name=(event)=>{
    this.setState({receiver_name:event.target.value});
}

    Ongiftvalue=(event)=>{
    this.setState({value:event.target.value});
}

    Ongiftname=(event)=>{
    this.setState({gift_name:event.target.value});
}

    Ongiftmessage=(event)=>{
    this.setState({message:event.target.value});
}

            ongiftbuy=(event)=>{
    
    const headers = {
      
         "Content-Type": "application/json"
     }
    console.log('Buy Gift Card',this.state);
    axios.post('http://localhost:5000/gift_cards/giftcard',this.state,{headers: headers}).then(res => {

         console.log('POST response', res);
        //  history.push('/verification');
     })
    }
    
    render(){
    return (
         <div id='gifcp'>
      
      <div id='gift1cp'>
          
                <h2>Buy A Gift Card</h2>
                <div >      <input 
                id='gif2cp'
                 type="text" 
                 name="title"
                 placeholder='Receivers email'
                 onChange={this.Ongiftreciever_email}/></div>
           
                <div >
                  <input 
                  id='gif2cp'
                  type="text" 
                  name="title" 
                  placeholder='Receivers name'
                  onChange={this.Ongiftreceiver_name}/>
                </div>
                    <div >
                       <button id='gif3cp'>Card value in ₹</button>
                {/*<select id = "dropdown">
                <option value="N/A">select</option>
                <option value="1">500</option>
                <option value="2">1000</option>
                <option value="3">1500</option>
                <option value="4">2000</option>
    </select>*/}
                     <input 
                       id='gif4cp' 
                       type="text" 
                       name="title" 
                       placeholder="100₹"
                       onChange={this.Ongiftvalue}/>
                  </div>
              <div>
                  <textarea id='gif5cp' refs="message" cols="20" rows="2"
                 placeholder="Gift Name (optional)"
                 onChange={this.Ongiftname}/>
              </div>
                  <div>
                      <textarea id='gif6cp' refs="message" cols="20" rows="2"
                        placeholder=" Write message (optional)"
                        onChange={this.Ongiftmessage}/>
                   </div>
                   <button class="gif7cp" onClick={this.ongiftbuy}>BUY GIFT CARD FOR ₹ 0</button>

     </div>       
</div>
        
    );
}
}
export default giftcard;