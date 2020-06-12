import React, { Component } from 'react';
import MyCoursessend from "./MyCourses" ;
import'./MyCourses.css' ; 
import axios from 'axios';



class MyCoursesDetails extends Component{

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
    
    const headers = {
            
      "Content-Type": "application/json"
  }
  const id = { id :1234};
 axios.post('http://localhost:5000/course_details/mycourses',id,{headers: headers}).then(res => {

        const data =res.data;
        this.setState({users:data})

        console.log(this.state.users)
        })

  }

  listItems = () =>
  this.state.users.map(user => (
    <div className="card">
      <MyCoursessend
                                    heading={user.heading}
                                    data={user.data}
                                    name={user.name}    
                                    />
    </div>
  ));

   
  render(){
  return (
      <div >  
           <div className="container">{this.listItems()}</div>

          </div>
          
        )
        }
}
  
  export default MyCoursesDetails ;