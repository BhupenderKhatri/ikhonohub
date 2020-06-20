import React ,{Component} from 'react' ;
import './comments.css' ;

const Comments = ({name ,comments,image}) => {
    return(


        <div id="alignment_comment" >
            <img src={image} id="img_comment" alt="comment_image"></img>
            <h2 id="comment_heading" >
                {name}
            </h2>
            <hr color="orangered"></hr>
            <p id="theirviews">
                {comments}
            </p>
                
            
        </div>
    );

}

export default Comments