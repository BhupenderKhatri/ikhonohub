import React from 'react';
// import CommentList from '../comments/CommentsList';
// import Courseprice from '../prices/priceList';
import Coursedetails from '../course_details/course_details';
import Nav from '../loginnav/loginnav';
import Footer from '../footer/footer';

function carddetails() {
  return (
    <div className="carddetails">
      <div>
      <Nav/>
      </div>
      
      <Coursedetails />
      <Footer/>
      {/* <Courseprice />
      <CommentList /> */}
      

    </div>
  );
}

export default carddetails;