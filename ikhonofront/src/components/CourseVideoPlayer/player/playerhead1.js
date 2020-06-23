import React ,{useState}from 'react';
import ReactPlayer from "react-player";

import {Link} from 'react-router-dom';
// import Desc from './VideoDescription/Direction';
import Iframe from 'react-iframe';
import axios from 'axios';

import '../ReactPlayer.css';



function PlayerHead1(){
        const courses= {
            reactjs:[
                {title:"Part 1",vid:"o8GW8XHqel4"},
                {title:"Part 2",vid:"Ie2kTU5ph8Q"},
                {title:"Part 3",vid:"dum7oOyIMIQ"}
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
            
            {renderVideo()}

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
export default PlayerHead1;