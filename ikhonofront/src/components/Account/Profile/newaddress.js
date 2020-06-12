import React ,{Component} from 'react';
import './newaddress.css';
import history from '../../../history';
import axios from 'axios';
import Newdashboardnav from '../../newdashboardnav/newdashboardnav';

class newaddress extends Component {

    constructor(props){
        super(props);
        this.state={
            addressname:'',
            addressnumber:'',
            addresspincode:'',
            addresscity:'',
            addresslocality:'',
            addressstate:'',
            addresslandmark:'',
            addresstype:''

        }
    }
    onValuechange(event){
        this.setState({addressstate:event.target.value})

    }

    onValuetypechange=(event)=>{
        this.setState({addresstype:event.target.value})
        
    }

    onnameChange=(event)=>{
        this.setState({addressname:event.target.value})

    }


    onnumberChange=(event)=>{
        this.setState({addressnumber:event.target.value})

    }

    onpincodeChange=(event)=>{
        this.setState({addresspincode:event.target.value})

    }

    onlocalityChange=(event)=>{
        this.setState({addresslocality:event.target.value})

    }

    onlandmarkChange=(event)=>{
        this.setState({addresslandmark:event.target.value})

    }
    oncitychange =(event)=>{
        this.setState({addresscity:event.target.value})
    }

    onSubmitaddress=(event)=>{
          
        const headers = {
          
             "Content-Type": "application/json"
         }
        console.log('form submit',this.state);
        axios.post('http://localhost:5000/users/addresschange',this.state,{headers: headers}).then(res => {

             console.log('POST response', res);
             history.push('/accountboard');
         })
        }


    render(){

    return (
    <div >

                <Newdashboardnav />
                <div id='new1'>
                        <h1>Manage Address</h1>
        
                 </div>
                 <div id='new2'>
                            <input refs="name" 
                            type="text" 
                            size="30"
                            placeholder="Name"
                            onChange={this.onnameChange}
                            />

                                <input refs="number" 
                                type="text" size="30"
                                placeholder="Phone Number"
                                onChange={this.onnumberChange}
                                />

                     </div>
                 <div id='new3'>

                            <input refs="pincode" 
                            type="text" size="30"
                            placeholder="Pincode"
                            onChange={this.onpincodeChange}
                            /> 
              
                            <input refs="locality"
                            type="text" size="30" 
                            placeholder="Locality"
                            onChange={this.onlocalityChange}
                            />

                    </div>


                 <div id='new5'>
                                    
                                <input refs="name" type="text" size="30" placeholder="city/district/town"
                                onChange={this.oncitychange}/>





                                <select id = "dropdown">
                                <option value="N/A" onChange={this.onValuechange}>select state</option>
                                <option value="Andaman and Nicobar Islands" onChange={this.onValuechange}>Andaman and Nicobar Islands</option>
                                <option value="Andhra Pradesh" onChange={this.onValuechange}>Andhra Pradesh</option>
                                <option value="Arunachal Pradesh" onChange={this.onValuechange}>Arunachal Pradesh</option>
                                <option value="Assam" onChange={this.onValuechange}>Assam</option>
                                <option value="Bihar" onChange={this.onValuechange}>Bihar</option>
                                <option value="Chandigarh" onChange={this.onValuechange}>Chandigarh</option>
                                <option value="Chhattisgarh" onChange={this.onValuechange}>Chhattisgarh</option>
                                <option value="Dadra and Nagar Haveli" onChange={this.onValuechange}>Dadra and Nagar Haveli</option>
                                <option value="Daman and Diu" onChange={this.onValuechange}>Daman and Diu</option>
                                <option value="Delhi" onChange={this.onValuechange}>Delhi</option>
                                <option value="Goa" onChange={this.onValuechange}>Goa</option>
                                <option value="Gujarat" onChange={this.onValuechange}>Gujarat</option>
                                <option value="Haryana" onChange={this.onValuechange}>Haryana</option>
                                <option value="Himachal Pradesh" onChange={this.onValuechange}>Himachal Pradesh</option>
                                <option value="Jammu and Kashmir" onChange={this.onValuechange}>Jammu and Kashmir</option>
                                <option value="Jharkhand" onChange={this.onValuechange}>Jharkhand</option>
                                <option value="Karnataka" onChange={this.onValuechange}>Karnataka</option>
                                <option value="Kerala" onChange={this.onValuechange}>Kerala</option>
                                <option value="Lakshadweep" onChange={this.onValuechange}>Lakshadweep</option>
                                <option value="Madhya Pradesh" onChange={this.onValuechange}>Madhya Pradesh</option>
                                <option value="Maharashtra" onChange={this.onValuechange}>Maharashtra</option>
                                <option value="Manipur" onChange={this.onValuechange}>Manipur</option>
                                <option value="Meghalaya" onChange={this.onValuechange}>Meghalaya</option>
                                <option value="Mizoram" onChange={this.onValuechange}>Mizoram</option>
                                <option value="Nagaland" onChange={this.onValuechange}>Nagaland</option>
                                <option value="Orissa" onChange={this.onValuechange}>Orissa</option>
                                <option value="Pondicherry" onChange={this.onValuechange}>Pondicherry</option>
                                <option value="Punjab" onChange={this.onValuechange}>Punjab</option>
                                <option value="Rajasthan" onChange={this.onValuechange}>Rajasthan</option>
                                <option value="Sikkim" onChange={this.onValuechange}>Sikkim</option>
                                <option value="Tamil Nadu" onChange={this.onValuechange}>Tamil Nadu</option>
                                <option value="Tripura" onChange={this.onValuechange}>Tripura</option>
                                <option value="Uttaranchal" onChange={this.onValuechange}>Uttaranchal</option>
                                <option value="Uttar Pradesh" onChange={this.onValuechange}>Uttar Pradesh</option>
                                <option value="West Bengal" onChange={this.onValuechange}>West Bengal</option>
                                </select>

                    </div>
                            
                 <div id='new6'>


                        <input refs="landmark" 
                        type="text" size="30" 
                        placeholder="Landmark(optional)"
                        onChange={this.onlandmarkChange}
                        /> 

                    </div>

                <div id='new7'>
                        <input type="radio"
                            value="Home" checked={this.state.addresstype==='Home'} 
                            onChange={this.onValuetypechange}
                            /> Home 
                            <input type="radio" 
                            value="Work" checked={this.state.addresstype==='Work'} 
                            onChange={this.onValuetypechange}
                            /> Work
            
                </div>

                    <button className="btn" id="save" onClick={this.onSubmitaddress}>Save</button> 
                 
o
               
               
     </div>
          
    )
}
}
export default newaddress ;