import React , {Component} from 'react';
import './profileinfo.css';
import axios from 'axios';

class profileinfo extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
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
    <h2>Personal Details</h2>
    <input class="perinputpro" type="text" name="title" value={user.name}/> 

    {/* your gender */}
   
    <h2>Your Gender</h2>
    <input  type="radio" value="male" checked={ this.gendercheckmale(user.gender)} />male
    <input id="info2pro" type="radio" value="female" checked={ this.gendercheckfemale(user.gender)} />Female


         
     {/* email Details        */}
    
    <h2>Email Address</h2>
    <input class="perinput1pro" refs="email" type="text" size="30" placeholder="Email" value={user.email}/>
          
   {/* Mobile Details */}
       
        <h2>Mobile Number</h2>
        <input class="perinputpro" refs="phone" type="text" size="30" placeholder="Phone" value={user.mobilenumber}/>
   
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