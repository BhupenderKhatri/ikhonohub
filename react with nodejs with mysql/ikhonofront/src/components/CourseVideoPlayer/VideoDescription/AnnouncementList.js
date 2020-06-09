import React from 'react';
import Announcing from './Announcements';
import {announced}  from './AnnouncementDetails' ;
 
const MyAnnounce = () => {
    return (
      <div >  
           {
           announced.map((user,i) => {
               return(
                   <Announcing
                    para1={announced[i].para1}
                    para2={announced[i].para2}
                    para3={announced[i].para3}
                    para4={announced[i].para4}
                    para5={announced[i].para5}

                   />
               );
           })}         
      </div>
          
        )
        }
            
  
  export default MyAnnounce  ;