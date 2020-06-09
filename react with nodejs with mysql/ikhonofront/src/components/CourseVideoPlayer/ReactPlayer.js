import React from 'react';
import ReactPlayer from "react-player";
import Foreward from '../course_details/Test1';
import Desc from './VideoDescription/Direction';

const VideoPlayer = ({value="https://www.youtube.com/watch?v=7XtLta2JjMw" }) => {
    return(
        <div>
            <ReactPlayer
            url={value}
            controls
            width='800px'
            height='500px'
            />
           
            <Foreward/> 
            <Desc/>
             
        </div>
    );
}


export default VideoPlayer;