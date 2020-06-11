import React,{Component} from 'react';
import './table.css';
import 'tachyons' ;
import Facebook from './fb.png';
import Twitter from './twit.png';
import Google from './google.png' ;
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
               history.push('/verification');
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

              <section class="img">
            
            
            <a href="/login"  ><button class="loginsignup" id="aa"  >Login</button></a>
                   <button class="signupsignup" >Signup</button>

                <table id='signingup'>
                    <tr>
        <td> {<input 
                    type= "text " 
                    name="username"
                     placeholder=  " Enter Name " 
                     class="inputs"
                    onChange={this.onUsersignupchange}
                     ></input>}</td>
                    </tr>
                    <tr>
                         <td> 
                              {<input
                               type= "email"
                                name="email" 
                                placeholder="Enter Email " 
                                class="inputs"
                                onChange={this.onEmailsignupchange}
                                ></input>}</td>
                    </tr>
                    <tr>
                         <td> 
                              {<input
                               type= "password" 
                               name="password" 
                               placeholder="Enter Password " 
                               class="inputs" 
                               onChange={this.onPasswordsignupchange}
                               ></input>}</td>
                    </tr>
                    <tr>
                         <td> {<input type= "password"
                          name="passwordConf"
                           placeholder="Confirm Password "
                            class="inputs" 
                          onChange={this.onPassword2signupchange}
                          ></input>}</td>
                    </tr>
                    <tr>
                         <td>
                         {<button id="aa" class="willsubmit" onClick={this.onSubmitsignup}>Login</button>}
                         </td>
                    </tr>
                    
                     <tr>
                         {<hr height='50px' breath='15px'></hr>}
                     </tr>
                  
                    <tr class="logos3">
                      {< a href="https://www.facebook.com/">  <img src= {Facebook}  alt="Error"></img> </a>}
                    </tr>

                    <tr class="logos4">
                      <a href="https://twitter.com/" >  {<img src= {Twitter}  alt="Error"></img>}</a>
                    </tr>
                    <tr class="logos5" >
                     <a href="https://www.google.co.in/">{<img src= {Google}  alt="Error"></img>}</a> 
                    </tr>
              
                
                    
        </table>  
                    
                    </section>
            </div>

        );
    }
    
}
export default table ;