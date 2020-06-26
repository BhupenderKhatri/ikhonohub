import React  from 'react' ;
import './Announcement.css' ;

const Announce=( {para1,para2,para3,para4,para5})=>{
 return(
     <div>
         <div id="announcement_table_manage">
        <table id="announcement_main ">
            <tr> <td class="announcement_detail_heading">
                <h2>New Coding Live Stream + Updates</h2></td>
            </tr>
            
            <tr ><td class="announcement_detail">
            {para1}</td>
            </tr>
            <tr > <td class="announcement_detail">
            {para2}</td>
            </tr>
            <tr > <td class="announcement_detail">
            {para3}</td>
            </tr>
            <tr > <td class="announcement_detail">
            {para4}</td>
            </tr>
            <tr> <td  class="announcement_detail">
            {para5}</td>
            </tr>
        </table>
        </div>
        
        
       
        
     </div>
 );
}


export default Announce ;