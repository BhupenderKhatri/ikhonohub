import React ,{Component}from 'react';
import './home.css';
import Slider from '../slider/slider';
import PopularCourses from '../popular_courses/popularCourses';
import MainCourses from '../mainCourses/mainCourses';
import Content from '../content/content';
import Footer from '../footer/footer';
import Nav from '../nav/nav';



class home extends Component{
    render(){
      
      return (
    <div className="home">
          <div>
            <Nav />
          </div>
            <div>
            <Slider/>
            </div>
            <div>
            <PopularCourses/>
            </div> 
            {/*
            <div>
            <MainCourses/>
            </div>
            */}
            <div>
              <Content/>
            </div>
            <div>
              <Footer/>
            </div>
     </div>
  );
}
}

export default home;