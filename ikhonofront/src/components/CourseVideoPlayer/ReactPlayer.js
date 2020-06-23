import React ,{useState}from 'react';
import ReactPlayer from "react-player";
import Foreward from '../course_details/Test1';
import {Link} from 'react-router-dom';
import Desc from './VideoDescription/Direction';
import Iframe from 'react-iframe';
import axios from 'axios';

import './ReactPlayer.css';



function VideoPlayer(){
        const courses= {
            reactjs:[
                {title:"1 waterfall model",vid:"dfHZWXrEYd0"},
                {title:"2 prototype model",vid:"d4ksC1z1k5I"},
                {title:"3 Spiral model",vid:"O3hoEGKpAxk"},
                {title:"4 RAD model",vid:"nW-U_cMohsI"},
                {title:"5 Agile model",vid:"87pa5RN1Nm4"},
                {title:"Quiz"}
            ]
                    }

            

            
        const [vid,uid] = useState(courses.reactjs[0].vid);
        const [title,utit] = useState(courses.reactjs[0].title);


    const renderVideo = ()=>{
        return(
            <>
            <div className="video-container">
            <ReactPlayer width="853px" height="480px" url={"https://www.youtube.com/embed/"+vid}  />
          </div> 
          </>
        )
    }

    return(
        <div id='react_player_main'>
            <div>
            {renderVideo()}
            </div>
            <div className="collection">
                
           
            {
                courses.reactjs.map(item => {
                return <Link to="#!" class="collection-item" onClick= {()=>{
                    uid(item.vid)
                    utit(item.title)
                      }}>{item.title}</Link>
                })
            }
                 
            </div>

            {/* <Foreward/>  */}
            {/* <Desc/> */}
             
        </div>
    );
}


export default VideoPlayer;