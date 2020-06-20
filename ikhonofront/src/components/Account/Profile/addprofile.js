import React ,{Component} from 'react';
import './newaddress.css';
import history from '../../../history';
import axios from 'axios';
import Newdashboardnav from '../../newdashboardnav/newdashboardnav';

class addprofile extends Component {

    constructor(props){
        super(props);
        this.state={
            id:'17',
            profilename:'',
            profilenumber:'',
            profilegender:'',
            profileaddress:'',
           
        }
    }
    onValuetypechange=(event)=>{
        this.setState({profilegender:event.target.value})

    }

    onnameChange=(event)=>{
        this.setState({profilename:event.target.value})

    }


    onnumberChange=(event)=>{
        this.setState({profilenumber:event.target.value})

    }

    onaddressChange=(event)=>{
        this.setState({profileaddress:event.target.value})

    }


    onSubmitaddress=(event)=>{
          
        const headers = {
          
             "Content-Type": "application/json"
         }
         let ud={
            id:this.state.id,
            name:this.state.profilename,
            mobile:this.state.profilenumber,
            gender:this.state.profilegender,
            address:this.state.profileaddress
            }
        console.log('form submit',this.state);
        axios.post('http://localhost:5000/users/profilechange',ud,{headers: headers}).then(res => {

             history.push('/account');
         })
        }


    render(){

    return (
    <div >

                <Newdashboardnav />
                <div id='new1'>
                        <h1>Manage Profile</h1>
        
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

                            
                            <input refs="address" 
                            type="text" size="30"
                            placeholder="address"
                            onChange={this.onaddressChange}
                            /> 
              

                    </div>

                    <div id='new7'>
                        <input type="radio"
                            value="Male" checked={this.state.profilegender==='Male'} 
                            onChange={this.onValuetypechange}
                            /> Male 
                            <input type="radio" 
                            value="Female" checked={this.state.profilegender==='Female'} 
                            onChange={this.onValuetypechange}
                            /> Female

                         </div>




                    <button className="btn" id="save" onClick={this.onSubmitaddress}>Save</button> 
                 

               
               
     </div>
          
    )
}
}
export default addprofile ;