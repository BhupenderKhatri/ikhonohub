import React from 'react';
import AllCourses from './Allcourses';
import NewDashboardNav from '../newdashboardnav/newdashboardnav';
import Footer from '../footer/footer';

const AllCoursesLoggedIn = () =>{
    return(
<div>
    <NewDashboardNav/>
    <AllCourses/>
    <Footer/>

</div>
    );
}
export default AllCoursesLoggedIn;