import React from 'react';
import Comments from './comments' ;
import { views } from '../../FinalDetails';


const CommentsList = () => {
  return (
    <div style={{display: "inline-block"}}>
         <h1 id="heading">What Other think of Us!!!</h1>
        {
          
        
        views.map((user,i) =>  {
          
          return(
 
            <Comments
            image ={views[i].image}
            name={views[i].name}         
            comments={views[i].comment}
            />
            
          
            );
          
        })
        
      }
    
        
    </div>
    
  );
}

export default CommentsList;