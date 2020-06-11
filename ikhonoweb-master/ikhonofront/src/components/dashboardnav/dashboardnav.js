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


    
    componentDidMount() {
        const headers = {
            "Content-type": "application/text"
        }
        let tok = localStorage.getItem("tkk");
        console.log(tok);
        axios.post('http://localhost:5000/users/login', { token: tok }).then(res => {
            if (res.data = "/dash") {

                history.push('/dashboard');

            }
            else {
                history.push('/login');
            }
        })
    }


    
    render(){
        return (
            <div className="nav_bar_dash">  
                <div className="logo5">
                    <img id="logo5" alt="ikhohub" onClick={()=>history.push('/dashboard')} src={logowhite}/>   
                </div>
                            <div className="restcomp">
                                <img id="bell5" onClick={()=>history.push('/bell')} alt="ikhohub" src={bell}/>   
                                <img id="cart5" onClick={()=>history.push('/cartLoggedIn')} alt="ikhohub" src={cart}/>   
                            </div>
                            <div class="dropdown">
                                <img  class="dropicn" alt="Error"  src= {Facebook}/>
                                    <div class="dropdown-content">
                                        <button class="droplist" onClick={()=>history.push('/dashboard')}>Hello Khatri</button>
                                        <button class="droplist" onClick={()=>history.push('/bell')}>Notification</button>
                                        <button class="droplist" onClick={()=>history.push('/accountboard')}>Account</button>
                                        <button class="droplist" onClick={()=>history.push('/help')}>Help</button>
                        <button class="droplist" onClick={this.onSubmitlogout}>LogOut</button>
                                    </div>
                         </div>
            </div>

        );
        }
    }
export default dashboardnav;