import React , {Component} from 'react';
import './profileinfo.css';
import axios from 'axios';
import mukhda from './padukone.jpg';

class profileinfo extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            
          };
    }


  componentDidMount(){
    this.getItems();
  }

  getItems =()=>{
    
    const headers = {
            
      "Content-Type": "application/json"
  }
  const id = { id :1234};
 axios.post('http://localhost:5000/users/personalinfo',id,{headers: headers}).then(res => {

        const data =res.data;
        this.setState({users:data})
        })

  }

  

  gendercheckmale =(gender) =>{
      if(gender==='male'){
        return(true)
      }
      else{
        return (false)
      }
  }

  gendercheckfemale =(gender) =>{
    if(gender==='female'){
      return(true)
    }
    else{
      return (false)
    }
}




  listItems = () =>
  this.state.users.map(user => (
    <div id='info1pro'>
<br></br>
    <p id="personal_details_heading">Personal Details</p>

    <img id="personal_mukhda" src={mukhda} alt="no image" ></img><br></br>

    <button id="mukhda_edit" >Edit</button>

    <div id="personal_nameinfo">

    <p class="personal_paravaliclass">
    Name  &nbsp;&nbsp;&nbsp; <a class="personal_request_change" href="">Request To Change</a>
    </p>
    <input class="perinputpro" type="text" name="title" value={user.name}/> 

    {/* your gender */}
   
    <p  class="personal_paravaliclass">Your Gender</p>
    <input  type="radio" class="info2pro" value="male" name="gender" checked={ this.gendercheckmale(user.gender)} /> Male&nbsp;&nbsp;    &nbsp;&nbsp;
    <input  type="radio"  class="info2pro" value="female" name="gender" checked={ this.gendercheckfemale(user.gender)} /> Female &nbsp;&nbsp;   &nbsp;&nbsp;
    <input  type="radio" class="info2pro" value="others" name="gender" checked={ this.gendercheckmale(user.gender)} /> Others

         
     {/* email Details        */}
    
    <p  class="personal_paravaliclass">Email Address  &nbsp;&nbsp;&nbsp;
     {/* <a class="personal_request_change1" href="">Change Password</a> */}
    </p>
    <input type="text" class="perinput1pro" refs="email" type="text" size="30" placeholder="Email" value={user.email}/>
          
   {/* Mobile Details */}
       
        <p  class="personal_paravaliclass">Mobile Number &nbsp;&nbsp;&nbsp;
         {/* <a class="personal_request_change2" href="">Edit</a> */}
        </p>
        <input type="text" class="perinputpro" refs="phone" type="text" size="30" placeholder="Phone" value={user.mobilenumber}/>

        <p  class="personal_paravaliclass">Address  &nbsp;&nbsp;&nbsp;
         {/* <a class="personal_request_change3" href="">Edit</a> */}
        </p>
        <input type="text"  class="perinputpro" type="text" size="30" placeholder="Address" value={user.mobilenumber}/>
   
</div>
</div>
  ));
  





render(){
       return (
        
        <div >
        
        <div className="container">{this.listItems()}</div>
            
</div>
        
    );
}
}
export default profileinfo;