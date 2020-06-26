import React, { Component } from 'react' ;

import {BsSearch} from 'react-icons/bs' ;
import './Bar.css' ;

import QnA from './QnA' ;
import Bookmark from "./Bookmark" ;
import Announcement from './AnnouncementList' ;
import Overview from  './BarContent' ;


class DirectionBar extends Component {
    
    constructor(){
        super();
        this.state={
            showOverview: true,
            showQna:false,
            showbookmark:false,
            showannounce:false 
        };
       this.change=this.hideComponent.bind(this) ;
    }

    hideComponent(name){
       
        console.log(name); 
        switch(name){
            case "showOverview":            
                this.setState({showOverview: true }  );   
                this.setState({showQna: false }  );
                this.setState({showbookmark: false }  );
                this.setState({showannounce: false }  );
                break;
            case "showQna":
                this.setState({showOverview: false }  );   
                this.setState({showQna: true }  );
                this.setState({showbookmark: false }  );
                this.setState({showannounce: false }  );
                break;
            case "showbookmark":
                this.setState({showOverview: false }  );   
                this.setState({showQna: false }  );
                this.setState({showbookmark: true }  );
                this.setState({showannounce: false }  );
                break;
            case "showannounce":
                this.setState({showOverview: false }  );   
                this.setState({showQna: false }  );
                this.setState({showbookmark: false }  );
                this.setState({showannounce: true }  );
                break;
           default:
               ;
        }
    
    }
    
    render(){
     const {showOverview,showQna,showbookmark,showannounce}=this.state ; 
       
     return(
          <div id='mainCoursebelowPlayer'>
                 <ul id="barstyle">
                     <li class="style1" ><h1><BsSearch/></h1></li>
                     <li class="style2" onClick={() => this.hideComponent("showOverview")}><a class="humra"><h1>Overview</h1></a></li>
                     <li class="style3" onClick={() => this.hideComponent("showQna")}><a class="humra1"><h1>QnA</h1></a></li>
                     {/* <li  class="style" onClick={() => this.hideComponent("showbookmark")}>Bookmarks</li> */}
                     <li class="style4" onClick={() => this.hideComponent("showannounce")}><h1>Announcement</h1></li>
                 </ul>
             
         

                <div>

                {showOverview && <Overview/>}

                {showQna && <QnA/>}

                {showbookmark && <Bookmark />}

                {showannounce && <Announcement />}

                </div>
        </div>          
        );
    }
}
 
export default DirectionBar; 
