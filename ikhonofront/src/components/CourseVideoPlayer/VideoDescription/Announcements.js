import React  from 'react' ;
import './Announcement.css' ;

const Announce=( {para1,para2,para3,para4,para5})=>{
 return(
     <div>
        <table>
            <tr>
            {para1}
            </tr>
            <tr>
            {para2}
            </tr>
            <tr>
            {para3}
            </tr>
            <tr>
            {para4}
            </tr>
            <tr>
            {para5}
            </tr>
        </table>
      
        
        
       
        
     </div>
 );
}


export default Announce ;