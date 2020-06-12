import React, { Component } from 'react';
import './address.css';
import history from '../../../history';
import axios from 'axios';

class addressinfo extends Component {

    constructor(props){
        super(props);
        this.state={
            users:[]
          };
    }


  componentDidMount(){
    this.getItems();
  }

  getItems =()=>{
    
    const headers = {
            
      "Content-Type": "application/json"
  }
  const id = { id :1234};
 axios.post('http://localhost:5000/users/addressinfo',id,{headers: headers}).then(res => {

        const data =res.data;
        this.setState({users:data})
        })

  }

  listItems = () =>
  this.state.users.map(user => (
    <div id='info'>
            Name:<input class="perinput1pro" refs="name" type="text" value={user.name}/><br />
            City:<input class="perinput1pro" refs="city" type="text"   value={user.city}/><br />
            landmark:<input class="perinput1pro" refs="landmark" type="text"  value={user.landmark}/><br />
            State:<input class="perinput1pro" refs="state" type="text" value={user.state}/><br />
            Pincode:<input class="perinput1pro" refs="pincode" type="text"  value={user.pincode}/><br />
            Type:<input class="perinput1pro" refs="type" type="text"  value={user.type}/><br />
            message:<input class="perinput1pro" refs="message" type="text"  value={user.message}/><br />
   </div>
    
  ));
  


    render(){
    return (
        <div id='addcp'>
         
            <div id='add1cp'>
                <h2>Manage Address</h2>
           <button id="aacp" class="address" onClick={()=>{history.push('/addaddress')}} >+ Add New Address</button>
             
            {
                    this.listItems()
             } 
              
            </div>
             
         </div>    
            );
        }
    }
        export default addressinfo;