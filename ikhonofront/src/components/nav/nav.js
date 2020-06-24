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
            <div class="nav_bar1">  
                <div class="logo1">
                <img id="logo1" alt="ikhohub" onClick={()=>history.push('/')} src={logowhite}/>   
                </div>
                <div className="restcomp">
                <img id="bell1" onClick={()=>history.push('/bell')} alt="ikhohub" src={bell}/>   
                <img id="cart1" onClick={()=>history.push('/cart')} alt="ikhohub" src={cart}/>   
                <button type="button" id="login_btn1" onClick={()=>history.push('/login')}>Login</button>
                <button type="button" id="signup_btn1" onClick={() => history.push('/signup')}>SignUp</button>
                <h2 id="nav_motivation">An investment in knowledge pays<br></br> the best interest.</h2>
                </div>
            </div>

        );
        }
    }
export default nav;