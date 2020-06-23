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
import ButtonDropdownComp from './buttonDropDownCmp';

class Newdashboardnav extends Component {

    constructor(){

        super();
        this.state={
            
            showHideDemo1:false,
            showHideDemo2:false
            // showHideDemo3:false
           
        };
        this.hideComponent=this.hideComponent.bind(this);
    }

    hideComponent(name){
       
        console.log(name); 
        switch(name){
            case "showHideDemo1":            
                this.setState({showHideDemo1: true }  );   
                this.setState({showHideDemo2: false }  );
                // this.setState({showHideDemo3: false }  );
                
                break;
            case "showHideDemo2":
                this.setState({showHideDemo1: false }  );   
                this.setState({showHideDemo2: true }  );
                //this.setState({showHideDemo3: false }  );
               
                break;
            // case "showHideDemo3":
            //     this.setState({showHideDemo1: false }  );   
            //     this.setState({showHideDemo2: false }  );
            //     this.setState({showHideDemo3: true }  );
            //     this.setState({showHideDemo4: false }  );
            //     break;
            
           
               
        }
    
    }
   
   
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
        const {showHideDemo1,showHideDemo2}=this.state;
        return (
            <div className="new_nav_bar_dash">  
                <div className="new_logo5">
                    <img id="new_logo5" alt="ikhohub" onClick={()=>history.push('/dashboard')} src={logowhite}/>   
                </div>
                            <div className="new_restcomp">
                                <img id="new_bell5" onClick={() => this.hideComponent("showHideDemo1")} alt="ikhohub" src={bell}/>   
                                <img id="new_cart5" onClick={() => this.hideComponent("showHideDemo2")} alt="ikhohub" src={cart}/>   
                            </div>
                            <div >
                            {showHideDemo1 && <div>
                                
                                    <button onClick={()=>history.push('/bell')}>bell</button>
                                
                                </div> }
                            {showHideDemo2 && <div>
                                
                                    <button onClick={()=>history.push('/cartLoggedIn')}>cart</button>
                               
                                </div> }
                         </div>
            </div>

        );
        }
    }
export default Newdashboardnav;