import React, { Component } from 'react';
import './login.css';
import Facebook from './fb.png';
import Twitter from './twit.png';
import Google from './sahivaligoogli.png' ;
import Loginnav from '../loginnav/loginnav';
import history from "./../../history";
import axios from "axios";

class login extends Component {

    constructor(props){

      super(props);

      this.state={

        email:'',
        password:''

      }

    }

    onEmailloginchange=(event)=>{
      this.setState({email:event.target.value});

    }

    onPasswordloginchange =(event)=>{
      this.setState({password:event.target.value});
    }

    onSubmitlogin =(event)=>{

      const headers ={
        "Content-type":"application/json"
      }

      console.log('form submit',this.state);

      axios.post('http://localhost:5000/users/login',this.state,{headers: headers}).then(res=>{
        if (res){
          console.log("hello");
          localStorage.setItem("tkk",res.data);
          console.log('POST response', res);
          history.push('/dashboard');

        }
        

      })


    }
  componentDidMount() {
    const headers = {
      "Content-type": "application/text"
    }
    let tok = localStorage.getItem("tkk");
    console.log(tok);
    axios.post('http://localhost:5000/users/login', {token:tok}).then(res => {
      if (res.data="/dash") {

        history.push('/dashboard');

      }
      else{
        history.push('/login'); 
      }
    })
  }



  render(){
    
  return (

    <div class="login">

        <div>
          <Loginnav />

      </div>
  
      
                  
           
        <table id='loggingup'>
          
<tr> <a class="loginsignup1" href="/loginsignup1" >Login</a><span id="login_slogan_danda">/</span>
                   <a href="/signup" class="signupsignup1" >Signup</a></tr>
                    <tr>
                         <td> {<input 
                         type= "email" 
                         placeholder="Enter Email "
                          class ='login_inputs'
                          onChange={this.onEmailloginchange}
                          ></input>}</td>
                    </tr>
                    <tr>
                         <td> {<input 
                         type= "password"
                          placeholder="Enter Password "
                           class="login_inputs"
                           onChange={this.onPasswordloginchange}
                           ></input>}</td>
                    </tr>
                    
                       

                       <tr >
                         <td> 
                         <button class="login_willsubmit" onClick={this.onSubmitlogin}>Login</button>
                       </td>
                       </tr>

                       <tr>
                         <td>
                         <a class="forgotpassword_anchor"href="/forgotpassword"><p id="login_forgot_password">Lost Your Password ? </p></a> 
                         </td>
                       </tr>
                       <tr>
                    
                         <td > 
                              <p class='login_or'>OR</p>
                         </td >
                         </tr> 
                       
                     <tr class="login_logos">
                      {< a href="https://www.facebook.com/">  <img src= {Facebook}  alt="Error"/> </a>}
                    </tr>


                    <tr class="login_logos1">
                      <a href="https://twitter.com/" >  {<img src= {Twitter}  alt="Error"/>}</a>
                    </tr>
                    <tr class="login_logos2" >
                     <a href="https://www.google.co.in/">{<img src= {Google}  alt="Error"/>}</a> 
                    </tr>
         
         
                  
                    
  </table>  
  <div id="login_slogan">
    <h2 id="login_slogan_heading">Where Aspiration Meets Preparation</h2>
    <p id="login_slogan_para">Find your next opportunity, get that key introduction, even meet a co-founder. Someone in our thriving and supportive <strong><span class="login_spancolor">IKHONO HUB</span></strong> community is always online willing to lend a hand.</p>
  </div>
        
    </div>
  );

  }

}

export default login;