
import React, { Component } from 'react';
import './navcartout.css';
import logowhite from './LogoWhite.png';
import bell from './notifications.png';
import cart from './Cart.png';
import history from '../../history';

class Navcartout extends Component {
    render(){
        return (
            <div class="nav_bar_out">  
                <div class="logo_out">
                <img id="logo_out" alt="ikhohub" onClick={()=>history.push('/')} src={logowhite}/>   
                </div>
                <div className="restcomp_out">
                <img id="bell_out" onClick={()=>history.push('/bell')} alt="ikhohub" src={bell}/>   
                <img id="cart_out" onClick={()=>history.push('/cart')} alt="ikhohub" src={cart}/>   
                <button type="button" id="login_btn_out" onClick={()=>history.push('/login')}>Login</button>
                <button type="button" id="signup_btn_out" onClick={() => history.push('/signup')}>SignUp</button>
              
                </div>
            </div>

        );
        }
    }
export default Navcartout;