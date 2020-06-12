import React from 'react';
import ReactPlayer from "react-player";
import Foreward from '../course_details/Test1';
import Desc from './VideoDescription/Direction';

const VideoPlayer = ({value}) => {
    return(
        <div>


            <ReactPlayer
            url={value}
            controls
            width='800px'
            height='500px'
            />
           

           {
                console.log(value)
            }

            <Foreward/> 
            <Desc/>
             
        </div>
    );
}


export default VideoPlayer;