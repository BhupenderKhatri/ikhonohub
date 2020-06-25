import React,{Component} from 'react';
import Trending from './TrendingCourses';
//import {recommendedtrendingcourses} from '../../TrendingCoursesDetails';
import './TrendingCoursesList.css';
import axios from 'axios';

class TrendingList extends Component {

  constructor(props){
    super(props);
    this.state={
      recommendedtrendingcourses:[]
    }
  }

  componentDidMount(){
    this.getItems();
  }

  getItems=()=>{
    const headers = {

      "Content-Type": "application/json"
  }
  const id = { id :1234};
  axios.post('http://localhost:5000/Courses_details_routes/trendingcourses',id,{headers: headers}).then(res => {
 
   const data = res.data;
   this.setState({recommendedtrendingcourses:data})
   })
 }

  render(){

    const {recommendedtrendingcourses}=this.state;
  return (
    <div >
        <p id="trending_courses_heading">Trending Courses</p>
        <div id='trendingcourseslist_main'>
        {
          
        
        recommendedtrendingcourses.map((user,i) =>  {
          
          return(
 
            < Trending 
            image ={recommendedtrendingcourses[i].img}
            name={recommendedtrendingcourses[i].name}         
            heading={recommendedtrendingcourses[i].heading}
            rating={recommendedtrendingcourses[i].rating}
            userimg={recommendedtrendingcourses[i].userimg}
            />
            
          
            );
          
        })
        
      }
    
    </div>
    </div>
    
  );
}
}
export default TrendingList;