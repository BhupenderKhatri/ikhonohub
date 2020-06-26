import React from 'react';
import Video from './player/video';
import DashNav from '../dashboardnav/dashboardnav';
import './playermain.css';
const playermain = ()=>{
    return(
        <div>
            <div id='playermain_nav'>
            <DashNav/>
            </div>
            
            <Video/>
        </div>
    );
}
export default playermain;