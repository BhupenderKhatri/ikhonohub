import React ,{Component} from 'react' ;
import './comments.css' ;

const Comments = ({name ,comments,image}) => {
    return(


        <div id="alignment" className ='bg-white br5 '>
            <img src={image} id="img" alt="comment_image"></img>
            <h2 className=" tc bg-white bold">
                {name}
            </h2>
            <hr></hr>
            <p id="theirviews">
                {comments}
            </p>
                
            
        </div>
    );

}

export default Comments