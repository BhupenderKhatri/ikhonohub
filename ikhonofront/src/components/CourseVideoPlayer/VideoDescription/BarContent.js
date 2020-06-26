import React, {Component} from 'react' ;
import './Bar.css' ; 
const BarContent =({theory,skilllevel,noofstudents,language,captions ,lecture, videos, certificates,describing} ) => {
    return(
        
        <div id="background" className='bg-white'>
                
                <p id="about_course_heading" className='tl'>About the course</p>
                <p>{theory}</p>                
                <hr class="bar_content_lines"></hr>
                 <table class="overview_tables">
                            <tr>
                                            <td ><p class="overview_detail_bynumbers">By the Numbers</p></td>
                                            <td  class="middlespace">
                                                <tr><p class="overview_detail_para"  >Skill Level:{skilllevel}</p></tr>
                                                <tr><p class="overview_detail_para"  >Students:{noofstudents}</p></tr>
                                                <tr><p class="overview_detail_para"  >Languages:{language}</p></tr>
                                                <tr><p class="overview_detail_para"  >captions:{captions}</p></tr>
                                            </td>
                                            <td class="middlespace">
                                                <tr><p class="overview_detail_para"  >Lectures:{lecture}</p></tr>
                                                <tr><p class="overview_detail_para"  >videos:{videos}</p></tr>
                                            </td>
                            </tr>
                </table> 
                            <hr class="bar_content_lines"></hr>
                <table class="overview_tables"> 
                            <tr> 
                             <td >
                             <p class="overview_detail_certificate">Certificates</p>
                             </td>   
                             <td class="middlespace">
                             <p class="overview_detail_para" > Get udemy certificates by completing entire course </p><br></br>
                              <button id="overview_buttonalign">Get Certificate</button>   
                             </td>
                              
                            </tr>
                </table> 
                          <hr class="bar_content_lines"></hr>
                <table class="overview_tables"> 
                            <tr>
                                <td>
                                  <p class="overview_detail_description"  >Description </p>
                                </td>
                                <td  class="middlespace">
                                    {describing}
                                </td>
                                
                            </tr>
                 
                 
                 </table>  
           
           

       
        </div>
    );
}
   
   
   
    

export default BarContent ;