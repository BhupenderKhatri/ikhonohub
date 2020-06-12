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
                     <li class="style" ><BsSearch/></li>
                     <li class="style" onClick={() => this.hideComponent("showOverview")}>Overview</li>
                     <li class="style" onClick={() => this.hideComponent("showQna")}>QnA</li>
                     <li  class="style" onClick={() => this.hideComponent("showbookmark")}>Bookmarks</li>
                     <li class="style" onClick={() => this.hideComponent("showannounce")}>Announcement</li>
                 </ul>
             
          <div>
               </div>

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
