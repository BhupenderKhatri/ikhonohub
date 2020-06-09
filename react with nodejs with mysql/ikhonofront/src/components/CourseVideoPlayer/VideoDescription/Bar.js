import React, {Component} from 'react' ;
import {BsSearch} from 'react-icons/bs' ;
import './Bar.css' ;
import {Link} from 'react-router-dom' ;
class Bar extends Component{
   
    render() {
        return(
            <div className='bg-white'>
            <table>
               <tr> 
                   <Link to="/overview">
                   <td class="barcontents" > <button id="search"><BsSearch/></button></td>
                   </Link>

                   <Link to="/overview">
                   <td class="barcontents"><button class="buttons">Overview</button></td>
                   </Link>
                   <Link to="/Qna">
                   <td class="barcontents"><button class="buttons">Q&A</button></td>
                   </Link>
                   <Link to="/bookmark">
                   <td class="barcontents"><button class="buttons">Bookmarks</button></td>
                   </Link>
                   <Link to="/announcements">
                   <td class="barcontents"><button class="buttons">Announcments</button></td>
                   </Link>
                   
                   
                   
                   
               </tr>
            
            </table>  



           
            </div>
        );
    }
}
export default Bar ;