import React,{Component, useReducer} from 'react';
import './Dropdown.css';
import VideoPlayer from '../CourseVideoPlayer/ReactPlayer'  ;
import Dropdown from './Dropdown';
import './courseslist.css'



 const displaythis=(urlvalue)=>{
   return( 
    
    <div>
        <VideoPlayer
       video={urlvalue}
       />
       {
              console.log(urlvalue)
       }
    </div>
  
   );
    
}



const CardWhiteDisplay =({content})=> {
    return(
        <div>
        
            {content.map((user,i)=>{
                return( 
                    <button id="headingwhite" onClick={()=>displaythis(content[i].videourl)}>
                    <ul>
                        <table id="innerlist">
                            <tr>
                                            <td>
                                                {content[i].jid}
                                            </td>
                                            <td>
                                            {content[i].jheading}
                                            </td>
                            </tr>
                       </table>
                        <table>
                            <tr> 
                                        <td>
                                        {content[i].jcount}
                                        </td>
                                        <td>
                                        {content[i].jtime}
                                        </td>       
                            </tr>
                            
                                    
                            
                        </table>

                    </ul>
                    </button>
                    
                    
                );
            })
        }
    </div>
    );


}
export default CardWhiteDisplay;