import React , {Component} from 'react';
import SubHeadings from './subHeadings';
import ReactPlayermain from '../ReactPlayer';
import PlayerHead1 from './playerhead1';
import PlayerHead2 from './playerhead2';
import PlayerHead3 from './playerhead3';
import './video.css';
import Arrow from './arrow.png';
import Blackclock from './Iconclock.png';
import Direction from '../VideoDescription/Direction';

class Video extends Component{
    constructor(){

        super();
        this.state={
            name :"React",
            showHideDemo1:true,
            showHideDemo2:false,
            showHideDemo3:false,
            showHideDemo4:false
        };
        this.hideComponent=this.hideComponent.bind(this);
    }

    hideComponent(name){
       
        console.log(name); 
        switch(name){
            case "showHideDemo1":            
                this.setState({showHideDemo1: true }  );   
                this.setState({showHideDemo2: false }  );
                this.setState({showHideDemo3: false }  );
                this.setState({showHideDemo4: false }  );
                break;
            case "showHideDemo2":
                this.setState({showHideDemo1: false }  );   
                this.setState({showHideDemo2: true }  );
                this.setState({showHideDemo3: false }  );
                this.setState({showHideDemo4: false }  );
                break;
            case "showHideDemo3":
                this.setState({showHideDemo1: false }  );   
                this.setState({showHideDemo2: false }  );
                this.setState({showHideDemo3: true }  );
                this.setState({showHideDemo4: false }  );
                break;
            case "showHideDemo4":
                this.setState({showHideDemo1: false }  );   
                this.setState({showHideDemo2: false }  );
                this.setState({showHideDemo3: false }  );
                this.setState({showHideDemo4: true }  );
                break;
           default:
               ;
        }
    
    }
 

    render(){
        const {showHideDemo1,showHideDemo2,showHideDemo3,showHideDemo4}=this.state;
        return(
            <div id="react_player_background">
            <div>
            <div id='video-main' >
                <div id='video-leftlist'>
                <ul>
                    <li  class="player_section" onClick={() => this.hideComponent("showHideDemo1")}>Section-1  Models <br></br> <span><img class="player_black_clock1" src={Blackclock} alt="nikal"></img></span><p class="player_section_time">100 min</p><span><img class="player_image" src={Arrow} alt="nikal"></img></span></li>
                    <li  class="player_section" onClick={() => this.hideComponent("showHideDemo2")}>Section-2  Equivalence Class Testing <br></br> <span><img class="player_black_clock2" src={Blackclock} alt="nikal"></img></span><p class="player_section_time">100 min</p><img class="player_image" src={Arrow} alt="nikal"></img></li>
                    <li  class="player_section" onClick={() => this.hideComponent("showHideDemo3")}>Section-3  Cocomo model <br></br><span><img class="player_black_clock3" src={Blackclock} alt="nikal"></img></span> <p class="player_section_time">100 min</p><img class="player_image" src={Arrow} alt="nikal"></img></li>
                    <li  class="player_section" onClick={() => this.hideComponent("showHideDemo4")}>Section-4  Testing <br></br><span><img class="player_black_clock4" src={Blackclock} alt="nikal"></img></span> <p class="player_section_time">100 min</p><img class="player_image" src={Arrow} alt="nikal"></img></li>
                </ul>
                </div>
                
                <div >
                {showHideDemo1 && 
                 
                     <ReactPlayermain/>
                     
                }
                 {showHideDemo2 && 
                 
                 <PlayerHead1/>
                 } 
                 
            
            {showHideDemo3 && 
                <PlayerHead2/>
            }
            {showHideDemo4 && 
                <PlayerHead3/>
                 
                //  videourl.map((users,i)=>{
                //      <SubHeadings
                //      headings={videourl.title[i]}
                //      />
                //  }
                //  )
            }
                            
                </div>
                </div>
                <div>
                    <Direction/>
                </div>
            </div>
            </div>
        );
    }
}
export default Video;