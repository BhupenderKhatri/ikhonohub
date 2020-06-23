import React,{Component} from 'react';
import './table.css';
import 'tachyons' ;
import Facebook from './fb.png';
import Twitter from './twit.png';
import Google from './sahivaligoogli.png' ;
import Loginnav from '../loginnav/loginnav';
import axios from 'axios';
import history from '../../history';
 
class table extends Component{

     constructor(props){
          
          super(props);

          this.state={
               signupUser:'',
               signupEmail:'',
               signupPassword:'',
               signupPassword2:''

          }
     }

     onUsersignupchange=(event)=>{
          this.setState({signupUser:event.target.value});
     }

     onEmailsignupchange=(event)=>{
          this.setState({signupEmail:event.target.value});
     }

     onPasswordsignupchange=(event)=>{
          this.setState({signupPassword:event.target.value});
     }

     onPassword2signupchange = (event) => {
          this.setState({ signupPassword2: event.target.value });
     }
     onSubmitsignup=(event)=>{
          
          const headers = {
            
               "Content-Type": "application/json"
           }
          console.log('form submit',this.state);
          axios.post('http://localhost:5000/users/register',this.state,{headers: headers}).then(res => {

               console.log('POST response', res);
               history.push('/Verification');
           })
          }
     componentDidMount() {
          const headers = {
               "Content-type": "application/text"
          }
          let tok = localStorage.getItem("tkk");
          axios.post('http://localhost:5000/users/register', { token: tok }).then(res => {
               if (res.data = "/dash") {

                    history.push('/dashboard');

               }
               else {
                    history.push('/signup');
               }
          })
     }

     
    render(){
        return(
            <div class='base'>

              <div>
                <Loginnav/>
              </div>

              
            

                <table id='signingup'>
               <tr><a href="/login" class="loginsignup"  >Login</a><span id="sign_in_slogan_danda">/</span>
                   <a class="signupsignup" >Signup</a></tr> 
                    <tr>
        <td> {<input 
                    type= "text " 
                    name="username"
                     placeholder=  " Enter Name " 
                     class="sign_in_inputs"
                    onChange={this.onUsersignupchange}
                     ></input>}</td>
                    </tr>
                    <tr>
                         <td> 
                              {<input
                               type= "email"
                                name="email" 
                                placeholder="Enter Email " 
                                class="sign_in_inputs"
                                onChange={this.onEmailsignupchange}
                                ></input>}</td>
                    </tr>
                    <tr>
                         <td> 
                              {<input
                               type= "password" 
                               name="password" 
                               placeholder="Enter Password " 
                               class="sign_in_inputs" 
                               onChange={this.onPasswordsignupchange}
                               ></input>}</td>
                    </tr>
                    <tr>
                         <td> {<input type= "password"
                          name="passwordConf"
                           placeholder="Confirm Password "
                            class="sign_in_inputs" 
                          onChange={this.onPassword2signupchange}
                          ></input>}</td>
                    </tr>
                    <tr>
                         <td>
                         {<button  class="sign_in_willsubmit" onClick={this.onSubmitsignup}>Register</button>}
                         </td>
                    </tr>
                    
                    <tr>
                    
                    <td > 
                         <p class='sign_in_or'>OR</p>
                    </td >
                    </tr> 
                  
                    <tr class="sign_in_logos3">
                      {< a href="https://www.facebook.com/">  <img src= {Facebook}  alt="Error"></img> </a>}
                    </tr>

                    <tr class="sign_in_logos4">
                      <a href="https://twitter.com/" >  {<img src= {Twitter}  alt="Error"></img>}</a>
                    </tr>
                    <tr class="sign_in_logos5" >
                     <a href="https://www.google.co.in/">{<img src= {Google}  alt="Error"></img>}</a> 
                    </tr>
              
                
                    
        </table>  

                   <div id="sign_in_slogan">
    <h2 id="sign_in_slogan_heading">Where Aspiration Meets Preparation</h2>
    <p id="sign_in_slogan_para">Find your next opportunity, get that key introduction, even meet a co-founder. Someone in our thriving and supportive <strong><span class="sign_in_spancolor">IKHONO HUB</span></strong> community is always online willing to lend a hand.</p>
  </div> 
               
            </div>

        );
    }
    
}
export default table ;