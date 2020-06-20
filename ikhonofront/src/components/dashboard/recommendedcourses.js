import React, { Component } from 'react';
import './recommendedcourses.css';
import history from '../../history';
import DasboardBookIcon from './icons/Group 412.png';
import DasboardVideoIcon from './icons/Group 411.png';
import Quiz from './icons/Group 413.png';
import DasboardResumeIcon from './icons/Group 358.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
var percentage = 0;

class recommendedcourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentsection: [],
            nextsecction: [],
            totalprogress: []
        }
    }

    componentDidMount() {
        this.getItems();
    }

    getItems = () => {

        const headers = {
            "Content-Type": "application/json"
        }
        const id = { id: 123456 };

        axios.post("http://localhost:5000/learning_processes/current", id, { headers: headers }).then(res => {

            const data = res.data;
            console.log(data)
            this.setState({ currentsection: data })
        })
        axios.post("http://localhost:5000/learning_processes/next", id, { headers: headers }).then(res => {

            const data = res.data;
            console.log(data)
            this.setState({ nextsecction: data })
        })
        axios.post("http://localhost:5000/learning_processes/progress", id, { headers: headers }).then(res => {

            const data = res.data;
            console.log(data)
            this.setState({ totalprogress: data })
        })
    }


    render() {
    return (
        <div >
            
           <div id='dashboard-CurrentCourse'>
                <div id='dashboard-resumeCourse'>
                 
                <div class="current_section_head">Current Section
            
                </div>
                <div>
                    <div id="current_icon"><img src={DasboardVideoIcon} />
                            <p id='current_co1'>{this.state.currentsection.map(dashvid => dashvid.video)}</p></div>
                    
                </div> 
                <div>
                <div id="current_icon"><img src={DasboardBookIcon} />
                            <p id='current_co1'>{this.state.currentsection.map(dashles => dashles.Lesson)}</p> </div>
                </div>
                <div>
                    <div><img id="current_icon" src={Quiz} />

                            <p id='current_co11'>{this.state.currentsection.map(dashqu => dashqu.Quiz)}</p></div>
                </div>
                <div>
                {/* <div id='res'><button onClick={()=>history.push('/player')}>Resume</button> </div>
                <div id="arrow">→</div> */}
                <div onClick={()=>history.push('/player')}>
            <div id="current_res">  <img src={DasboardResumeIcon} /> </div>
                </div>
                </div>
                </div>
            
            <div id='dashboard-next'> 
              <div class="current_section_head1">Next Section
             
              </div>
              <div>
                        <div class="current_Video1">{this.state.nextsecction.map(dashhead => dashhead.heading)}</div>
              </div>
              <div>
                        <div class="current_Video1">{this.state.nextsecction.map(dashrev => dashrev.review)}</div>
              </div>
              <div>
              <div>
                {/* <div id='res'><button onClick={()=>history.push('/player')}>Resume</button> </div>
                <div id="arrow">→</div> */}
                <div onClick={()=>history.push('/player')}>
            <div id="current_res1">  <img src={DasboardResumeIcon} /> </div>
                </div>
                </div>
              </div>              
            </div>
            <div id='dashboard-TotalProgress'> 
              <div class="current_section_head2">Total Progress
              </div>
              <p id='dashoard_resumecourse_progressBar'>
                  {
                            percentage = this.state.totalprogress.map(dashbar => dashbar.bar)
                  }
                        <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth='15' 
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,
                 
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                 
                    // Text size
                    textSize: '16px',
                 
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                 
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                 
                    // Colors
                    pathColor: `rgba(255,69,0, ${  100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
              />
              </p>
              
            </div>
            </div>
            {/* <div id='col1'>
               <h6> Recommended Courses</h6>
               <button id='btn_allcourses' onClick={()=>history.push('/AllCoursesLoggedIn')}>See All Courses</button>
            </div>
           <div>
               <Recommendedcard/>
           </div> */}
            
</div>
        
    );
}
}

export default recommendedcourses;