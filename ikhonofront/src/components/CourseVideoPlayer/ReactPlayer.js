import React ,{useState}from 'react';
import ReactPlayer from "react-player";
import Foreward from '../course_details/Test1';
import {Link} from 'react-router-dom';
import Desc from './VideoDescription/Direction';
import Iframe from 'react-iframe';
import axios from 'axios';
import Whiteclock from './clock.png';

import './ReactPlayer.css';



function VideoPlayer(){
        const courses= {
            reactjs:[
                {title:" waterfall model",vid:"dfHZWXrEYd0",time:"20 min"},
                {title:" prototype model",vid:"d4ksC1z1k5I",time:"20 min"},
                {title:" Spiral model",vid:"O3hoEGKpAxk",time:"20 min"},
                {title:" RAD model",vid:"nW-U_cMohsI",time:"20 min"},
                {title:" Agile model",vid:"87pa5RN1Nm4",time:"20 min"},
                {title:" Quiz",time:"15 min"}
            ]
                    }

            

            
        const [vid,uid] = useState(courses.reactjs[0].vid);
        const [title,utit] = useState(courses.reactjs[0].title);
        const [time,utime] = useState(courses.reactjs[0].time);

    const renderVideo = ()=>{
        return(
            <>
            <div className="video-container">
            <ReactPlayer width="100%" height="100%"  controls = "true"  url={"https://www.youtube.com/embed/"+vid } controls={true} />
          </div> 
          </>
        )
    }

    return(
        <div id='react_player_main'>
            <div>
            {renderVideo()}
            </div>
            <div className="collection_react_player">
                
           
            <ol > {
                courses.reactjs.map(item => {
                return <Link  to="#!" class="collection-item" onClick= {()=>{
                    uid(item.vid)
                    utit(item.title)
                    utime(item.time)
                      }}>
                        <li > {item.title} <br/><span> <img class="player_white_clock" src={Whiteclock} alt="nikal"></img></span><p class="player_content_para">{item.time}</p> </li>
                        
                          </Link>
                         

                }) 
            }  </ol>
                 
            </div>

            {/* <Foreward/>  */}
            {/* <Desc/> */}
             
        </div>
    );
}


export default VideoPlayer;