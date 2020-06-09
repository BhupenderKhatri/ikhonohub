import React ,{Component}from 'react';
import RecommendedCourses from './recommendedcourses';
import MyCoursesList from './MyCourses/MyCoursesList' ;
import Newdashboardnav from '../newdashboardnav/newdashboardnav';
import Footer from '../footer/footer';
import '../dashboard/dashboard.css';
import Facebook from '../signup/facebook.png';

class dashboard extends Component{

  constructor(){

    super();
    this.state={

      showHideDemo1:true,
      showHideDemo2:false
    };
    this.hideComponent=this.hideComponent.bind(this);

  }



  hideComponent(name){
       

    console.log(name); 
    switch(name){
        case "showHideDemo1":            
            this.setState({showHideDemo1: true }  );   
            this.setState({showHideDemo2: false }  );
            break;
        case "showHideDemo2":
            this.setState({showHideDemo1: false }  );   
            this.setState({showHideDemo2: true }  );
            break;
       default:
           ;
    }

}


  render(){

    const {showHideDemo1,showHideDemo2}=this.state;

  return (
    <div className="dashboard">
            <div>
              <Newdashboardnav />
            </div>
            
            <div id='dashboard-namebar'>
              <img id='dashboard-namebar-icon' src={Facebook}/>
              <div id='dashboard-namebar-name'>
                <div>
                  Khatri
                </div>
                <div>
                  Free member
                </div>
              </div>
              <div id='dashboard-streak'>
                <div>
                Streak
                </div>
                <div>
                &nbsp;&nbsp;&nbsp; 5
                </div>
              </div>
              <div id='dashboard-badges'>
                <div>Badges</div>
                <div>&nbsp; &nbsp;&nbsp; 0</div>
              </div>
            </div>

            <table id="buttonsalign">
             <tr>
                     <td>
                           <button  class="upperbutton" onClick={() => this.hideComponent("showHideDemo1")}>Today</button>
                     </td>
                     <td>
                            <button id="button2" onClick={() => this.hideComponent("showHideDemo2")}>My Course</button>    
                     </td>
             </tr>

           </table>


           <div>

              {showHideDemo1 &&  <RecommendedCourses/>}

              {showHideDemo2 && <MyCoursesList/>}

          </div>
          
          
          <div>
            <Footer/>
          </div>
      
    </div>
  );
}
}
export default dashboard;