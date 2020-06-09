import React  from 'react' ;
import './Bookmark.css' ;


const Bookmarkset= ({section ,time,heading,videonbr,videotopic}) => {
    return(
       <div id="space">  
              
              Section:{section} <br></br>
              <strong>{heading}</strong> <br></br>
              {videonbr}
              {videotopic}<br></br>
              {time}<br></br>
               <hr></hr>  
        </div>

    );

}


export default Bookmarkset ;