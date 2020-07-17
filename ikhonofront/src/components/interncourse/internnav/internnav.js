import React, { Component } from 'react';
import './internnav.css';
import logowhite from './LogoWhite.png';
import history from '../../history';
class Internnav extends Component{
  render(){
    
    return (
            <div class="nav_bar1">  
                <div class="logo1">
                <img id="logo1" alt="ikhohub" onClick={()=>history.push('/')} src={logowhite}/>   
                </div>
            </div>
  );
}
}
    
export default Internnav;