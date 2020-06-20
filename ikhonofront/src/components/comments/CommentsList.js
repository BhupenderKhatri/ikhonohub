import React, { Component } from 'react';
import Comments from './comments' ;
import axios from 'axios';


class CommentsList extends Component {

  constructor(props){
    super(props);
    this.state={
      views:[]
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
   axios.post('http://localhost:5000/cardinfodetail/views',id,{headers: headers}).then(res => {
      
    const data = res.data;
    this.setState({views:data})
    })

  }


  render(){

    const { views}=this.state;
  return (
    <div>
      <span id="orangeline_coursedetail"></span>
    <div style={{display: "inline-block"}}>
         <h1 id="heading_com">What Other think of Us!!!</h1>
        {
          
        
        views.map((user,i) =>  {
          
          return(
 
            <Comments
            image ={views[i].image}
            name={views[i].name}         
            comments={views[i].comment}
            />
            
          
            );
          
        })
        
      }
    
    </div>
    </div>
    
  );
}
}

export default CommentsList;