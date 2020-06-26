
import React, { Component } from 'react';
import './nav.css';
import logowhite from './LogoWhite.png';
import bell from './notifications.png';
import cart from './Cart.png';
import history from '../../history';


//import Logo from '../components/logo/logo';
//import cart from '../components/cart/cart';
//import login from '../components/login/login';
//import signup from '../components/signup/signup';

class nav extends Component {
    render(){
        return (
            <div class="Cart_nav_bar1">  
                <div class="Cart_logo1">
                <img id="Cart_logo1" alt="ikhohub" onClick={()=>history.push('/')} src={logowhite}/>   
                </div>
                <div className="Cart_restcomp">
                <img id="Cart_bell1" onClick={()=>history.push('/bell')} alt="ikhohub" src={bell}/>   
                <img id="Cart_cart1" onClick={()=>history.push('/cart')} alt="ikhohub" src={cart}/>   
                <button type="button" id="Cart_login_btn1" onClick={()=>history.push('/login')}>Login</button>
                <button type="button" id="Cart_signup_btn1" onClick={() => history.push('/signup')}>SignUp</button>
                </div>
            </div>

        );
        }
    }
export default nav;