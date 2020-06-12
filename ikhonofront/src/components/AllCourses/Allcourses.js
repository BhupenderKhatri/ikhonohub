import React,{Component} from 'react';
import Card from './../course_cards/card';
import axios from 'axios';


class Courses extends Component {


  constructor(props){
    super(props);
    this.state={
      users:[
     
      ]
    }
   
  }


  componentDidMount(){
    this.getItems();
  }

  getItems =()=>{
    axios.get('http://localhost:5000/course_details/Allcourses').then(
      res=>{
        const data =res.data;
        this.setState({users:data})
      }
    )
  }
  

  listItems1 = () =>
  this.state.users.map(user => (
    <div className="card">
      <div> 
                <h1 className="color white tc ">{user.subject}</h1>
                {
          
            <Card
            heading={user.heading}
            data={user.data}
            name={user.name}
            url={user.url}    
            />
   }
 
               
     </div>  
    </div>
  ));
  
    
  
    render(){
      
      return (
      <div >


        {
              <div className="container">{this.listItems1()}</div>
        }     

             <div>{this.props.children}</div> 
      </div>
      
  
      
      
    );
      }
  }
  
  export default Courses;