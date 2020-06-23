import React ,{useState}from 'react';
import ReactPlayer from "react-player";

import {Link} from 'react-router-dom';
// import Desc from './VideoDescription/Direction';
import Iframe from 'react-iframe';
import axios from 'axios';

import '../ReactPlayer.css';



function PlayerHead3(){
        const courses= {
            reactjs:[
                {title:" 1. Black Box and White Box Testing",vid:"GuXKM7z7t2M"},
                {title:" 2. Unit and System Testing",vid:"uHBwa1KGUQU"},
                {title:" 3. Alpha testing and Beta testing",vid:"PnDDCEaB8P4"},
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
export default PlayerHead3;