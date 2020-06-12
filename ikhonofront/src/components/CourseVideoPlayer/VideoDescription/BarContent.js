import React, {Component} from 'react' ;
import './Bar.css' ; 
const BarContent =({theory,skilllevel,noofstudents,language,captions ,lecture, videos, certificates,describing} ) => {
    return(
        
        <div id="background" className='bg-white'>
                
                <h3 className='tl'>About the course</h3>
                <p>{theory}</p>                
                <hr class="lines"></hr>
                 <table class="tables" >
                            <tr>
                                            <td>By the Numbers</td>
                                            <td  class="middlespace">
                                                <tr>Skill Level:{skilllevel}</tr>
                                                <tr>Students:{noofstudents}</tr>
                                                <tr>Languages:{language}</tr>
                                                <tr>captions:{captions}</tr>
                                            </td>
                                            <td class="middlespace">
                                                <tr>Lectures:{lecture}</tr>
                                                <tr>videos:{videos}</tr>
                                            </td>
                            </tr>
                </table> 
                            <hr class="lines"></hr>
                <table class="tables"> 
                            <tr> 
                             <td>
                             Certificates
                             </td>   
                             <td class="middlespace">
                              Get udemy certificates by completing entire course <br></br>
                              <button id="buttonalign">Get Certificate</button>   
                             </td>
                              
                            </tr>
                </table> 
                          <hr class="lines"></hr>
                <table class="tables"> 
                            <tr>
                                <td>
                                    Description 
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