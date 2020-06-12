import React, { Component } from 'react';
import './savedcards.css';
import axios from 'axios';

class savedcards extends Component {

//     constructor(props)
//     {
          
//         super(props);

//         this.state={
//             reciever_email:'',
//              receiver_name:'',
//              value:'',
//             //  no_of_cards: '',
//              gift_name: '',
//              message: ''


//         };
//         this.handleChange = this.handleChange.bind(this);
//    }

//    handleData = () => {
//     fetch('http://localhost:5000/gift_cards/savedcards', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({

    render(){
    return (
        <div>
       
            <div class='savecp'>                           
                
                         <h2>Manage Saved Cards</h2>
                
                            <div>
                                <input id="save1cp" type="text" name="title" value={'+ ADD A NEW CARD'}/>
                            </div>
                    <div>
                        <input id="save1cp" type="text" name="title" value={'+ADD A NEW CARD'}/>
                    </div>
            </div>

            
</div>
        
    );
}
}

export default savedcards;