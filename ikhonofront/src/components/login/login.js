import React, { Component } from 'react';
import './login.css';
import Facebook from './fb.png';
import Twitter from './twit.png';
import Google from './google.png' ;
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
  
      
                   <button class="loginsignup1" >Login</button>
                   <a href="/signup"><button class="signupsignup1" >Signup</button> </a>
           
        <table id='loggingup'>

                    <tr>
                         <td> {<input 
                         type= "email" 
                         placeholder="Enter Email "
                          class ='input'
                          onChange={this.onEmailloginchange}
                          ></input>}</td>
                    </tr>
                    <tr>
                         <td> {<input 
                         type= "password"
                          placeholder="Enter Password "
                           class="input"
                           onChange={this.onPasswordloginchange}
                           ></input>}</td>
                    </tr>
                    <tr>
                    
                         <td id='keepme'> 
                              {<input type= "checkbox" class='input' id="checkme" ></input>}
                              {<label> Keep me Logged in</label>}
                         </td >
                         </tr>
                       
                       

                    
                       <tr >
                         <td> 
                         <button class="willsubmit" onClick={this.onSubmitlogin}>Login</button>
                       </td>
                       </tr>
                       
               

                     <tr id='line'>
                         {<hr height='50px'></hr>}
                     </tr>
                     <tr class="logos">
                      {< a href="https://www.facebook.com/">  <img src= {Facebook}  alt="Error"></img> </a>}
                    </tr>


                    <tr class="logos1">
                      <a href="https://twitter.com/" >  {<img src= {Twitter}  alt="Error"></img>}</a>
                    </tr>
                    <tr class="logos2" >
                     <a href="https://www.google.co.in/">{<img src= {Google}  alt="Error"></img>}</a> 
                    </tr>
         
         
                
                    
  </table>  
              
    </div>
  );

  }

}

export default login;