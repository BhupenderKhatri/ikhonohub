import React, { Component } from 'react';
import './dashboardnav.css';
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

class dashboardnav extends Component {
    
    
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
            <div className="nav_bar_dash">  
                <div className="nav_dash_logo5">
                    <img id="nav_dash_logo5" alt="ikhohub" onClick={()=>history.push('/dashboard')} src={logowhite}/>   
                </div>
                            <div className="nav_dash_restcomp">
                                <img id="nav_dash_bell" onClick={()=>history.push('/bell')} alt="ikhohub" src={bell}/>   
                                <img id="nav_dash_cart" onClick={()=>history.push('/cartLoggedIn')} alt="ikhohub" src={cart}/>   
                            </div>
                            <div class="nav_dash_dropdown">
                                <img  class="nav_dash_dropicn" alt="Error"  src= {Facebook}/>
                                    <div class="nav_dash_dropdown-content">
                                        <button class="nav_dash_droplist" onClick={()=>history.push('/dashboard')}>Hello Khatri</button>
                                        <button class="nav_dash_droplist" onClick={()=>history.push('/bell')}>Notification</button>
                                        <button class="nav_dash_droplist" onClick={()=>history.push('/accountboard')}>Account</button>
                                        <button class="nav_dash_droplist" onClick={()=>history.push('/help')}>Help</button>
                        <button class="nav_dash_droplist" onClick={this.onSubmitlogout}>LogOut</button>
                                    </div>
                         </div> 
            </div>

        );
        }
    }
export default dashboardnav;