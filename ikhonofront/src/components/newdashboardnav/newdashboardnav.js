import React, { Component } from 'react';
import './newdashboardnav.css';
import logowhite from '../nav/LogoWhite.png';
import bell from '../nav/notifications.png';
import cart from '../nav/Cart.png';
import history from '../../history';
import Facebook from '../signup/facebook.png';
import axios from "axios";

//import Logo from '../components/logo/logo';
//import cart from '../components/cart/cart';
//import login from '../components/login/login';
//import signup from '../components/signup/signup';

class Newdashboardnav extends Component {
   
   
    onSubmitlogout = (event) => {

        const headers = {
            "Content-type": "application/text"
        }
        let tok = localStorage.getItem("tkk");
        console.log(tok);
        axios.post('http://localhost:5000/users/logout', { token: tok }).then(res => {

            console.log(res.data);

            history.push('/');
            localStorage.clear();

        })


    }



    
    render(){
        return (
            <div className="new_nav_bar_dash">  
                <div className="new_logo5">
                    <img id="new_logo5" alt="ikhohub" onClick={()=>history.push('/dashboard')} src={logowhite}/>   
                </div>
                            <div className="new_restcomp">
                                <img id="new_bell5" onClick={()=>history.push('/bell')} alt="ikhohub" src={bell}/>   
                                <img id="new_cart5" onClick={()=>history.push('/cartLoggedIn')} alt="ikhohub" src={cart}/>   
                            </div>
                            <div class="new_dropdown">
                                <img  class="new_dropicn" alt="Error"  src= {Facebook}/>
                                    <div class="new_dropdown-content">
                                        <button class="new_droplist" onClick={()=>history.push('/dashboard')}>Hello Khatri</button>
                                        <button class="new_droplist" onClick={()=>history.push('/bell')}>Notification</button>
                                        <button class="new_droplist" onClick={()=>history.push('/accountboard')}>Account</button>
                                        <button class="new_droplist" onClick={()=>history.push('/help')}>Help</button>
                        <button class="new_droplist" onClick={this.onSubmitlogout}>LogOut</button>
                                    </div>
                         </div>
            </div>

        );
        }
    }
export default Newdashboardnav;