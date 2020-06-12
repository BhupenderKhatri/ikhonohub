import React ,{Component}from 'react';
import RecommendedCourses from './recommendedcourses';
import MyCoursesList from './MyCourses/MyCoursesList' ;
import Newdashboardnav from '../newdashboardnav/newdashboardnav';
import Footer from '../footer/footer';
import '../dashboard/dashboard.css';
import Facebook from '../signup/facebook.png';
import axios from 'axios';

class dashboard extends Component{

  constructor(props){

    super(props);
    this.state={
      users:[],
      showHideDemo1:true,
      showHideDemo2:false
    };
    this.hideComponent=this.hideComponent.bind(this);

  }


  componentDidMount(){
    this.getItems();
  }

  getItems =()=>{
    
    const headers = {
            
      "Content-Type": "application/json"
  }
  const id = { id :1234};
 axios.post('http://localhost:5000/users/personalinfo',id,{headers: headers}).then(res => {

        const data =res.data;
        this.setState({users:data})
        })

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


listItems = () =>
this.state.users.map(user => (
  <div className="namebar">
     <div id='dashboard-namebar'>
              <img id='dashboard-namebar-icon' src={Facebook}/>
              <div id='dashboard-namebar-name'>
                <div>
              {user.name}
                </div>
                <div>
                  {user.subscription}
                </div>
              </div>
              <div id='dashboard-streak'>
                <div>
                Streak
                </div>
                <div>
                &nbsp;&nbsp;&nbsp;{user.streak}
                </div>
              </div>
              <div id='dashboard-badges'>
                <div>Badges</div>
                <div>&nbsp; &nbsp;&nbsp;{user.badges}</div>
              </div>
            </div>
  
  </div>
));



  render(){

    const {showHideDemo1,showHideDemo2}=this.state;

  return (
    <div className="dashboard">
            <div>
              <Newdashboardnav />
            </div>

            <div className="container">{this.listItems()}</div>

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