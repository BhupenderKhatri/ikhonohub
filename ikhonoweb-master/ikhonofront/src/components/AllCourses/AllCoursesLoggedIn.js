import React from 'react';
import AllCourses from './Allcourses';
import DashboardNav from '../dashboardnav/dashboardnav';
import Footer from '../footer/footer';

const AllCoursesLoggedIn = () =>{
    return(
<div>
    <DashboardNav/>
    <AllCourses/>
    <Footer/>

</div>
    );
}
export default AllCoursesLoggedIn;