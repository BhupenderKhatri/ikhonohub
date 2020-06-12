import React, { Component } from 'react';
import logowhite from '../nav/LogoWhite.png';
import history from '../../history';
import './loginnav.css';

class loginnav extends Component {
    render(){
        return (
            <div className="nav_bar_login">  
                <img id="login_logo" alt="ikhohub" onClick={()=>history.push('/')} src={logowhite}/>  
                
            </div>

        );
        }
    }
export default loginnav;