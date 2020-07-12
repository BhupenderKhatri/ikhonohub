
import React, { Component } from 'react';
import './nav.css';
import logowhite from './LogoWhite.png';
import bell from './notifications.png';
import cart from './Cart.png';
import history from '../../history';
import {toast} from 'react-toastify';
import './toast.css';

toast.configure()
function Nav () {
    
    const toastId = React.useRef(null);
  
    const notify = () => {
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast.info("I cannot be duplicated!",{position:"top-center",autoClose:3000});
        toastId.current = toast.info("Hello Rishu",{position:"top-center",autoClose:5000});
      }
    }
        return (
            <div class="nav_bar1">  
                <div class="logo1">
                <img id="logo1" alt="ikhohub" onClick={()=>history.push('/')} src={logowhite}/>   
                </div>
                <div className="restcomp">
                <img id="bell1" onClick={notify} alt="ikhohub" src={bell}/>   
                {/* <img id="cart1" onClick={()=>history.push('/cart')} alt="ikhohub" src={cart}/>    */}
                <button type="button" id="login_btn1" onClick={()=>history.push('/login')}>Login</button>
                <button type="button" id="signup_btn1" onClick={() => history.push('/signup')}>SignUp</button>
                {/* <h2 id="nav_motivation">An investment in knowledge pays<br></br> the best interest.</h2> */}
                </div>
            </div>

        );
        }
    
export default Nav;