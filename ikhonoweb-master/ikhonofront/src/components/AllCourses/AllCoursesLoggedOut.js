import React from 'react';
import AllCourses from './Allcourses';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

const AllCoursesLoggedIn = () =>{
    return(
<div>
    <Nav/>
    <AllCourses/>
    <Footer/>

</div>
    );
}
export default AllCoursesLoggedIn;