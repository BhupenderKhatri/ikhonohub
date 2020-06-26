import React ,{useState}from 'react';
import ReactPlayer from "react-player";

import {Link} from 'react-router-dom';
// import Desc from './VideoDescription/Direction';
import Iframe from 'react-iframe';
import axios from 'axios';
import Whiteclock from '../clock.png';
import '../ReactPlayer.css';



function PlayerHead2(){
        const courses= {
            reactjs:[
                {title:"Part 1 Cocomo Model",vid:"28uhnAaLSbs",time:"20 min"},
                {title:"Part 2 Cocomo Model",vid:"MDQqtW4VzLY",time:"20 min"},
                {title:"Quiz",time:"20 min"}
                
            ]
                    }

            

            
        const [vid,uid] = useState(courses.reactjs[0].vid);
        const [title,utit] = useState(courses.reactjs[0].title);
        const [time,utime] = useState(courses.reactjs[0].time);

    const renderVideo = ()=>{
        return(
            <>
            <div className="video-container">
            <ReactPlayer width="100%" height="100%"  controls = "true" url={"https://www.youtube.com/embed/"+vid}  />
          </div> 
          </>
        )
    }

    return(
        <div id='react_player_main'>
            
            {renderVideo()}

            <div className="collection_react_player">
            <ol>
           
            {
                courses.reactjs.map(item => {
                return <Link to="#!" class="collection-item" onClick= {()=>{
                    uid(item.vid)
                    utit(item.title)
                      }}>  <li>{item.title}<br></br><span> <img class="player_white_clock" src={Whiteclock} alt="nikal"></img></span><p class="player_content_para">{item.time}</p> </li></Link>
                })
            }
                 </ol>    
            </div>

            {/* <Foreward/>  */}
            {/* <Desc/> */}
             
        </div>
    );
}
export default PlayerHead2;