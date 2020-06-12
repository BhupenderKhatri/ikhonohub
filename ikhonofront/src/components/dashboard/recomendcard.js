import React, { Component } from 'react';
import Card from '../course_cards/card';
import axios from 'axios';


class Recommendcard extends Component {

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
    axios.get('http://localhost:5000/course_details/recommendedcourse').then(
      res=>{
        const data =res.data;
        this.setState({users:data})
      }
    )
  }

  listItems = () =>
  this.state.users.map(user => (
    <div className="card">
      <Card
    heading={user.heading}
    data={user.data}
    name={user.name}
    url={user.url}
    />
    </div>
  ));


  render(){  

  return (
    <div style={{display:"inline-block"}}>
      {
      <div className="container">{this.listItems()}</div>
}
    </div>
  );
}
}

export default Recommendcard;