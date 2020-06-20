import React from 'react';
import './DashboardMenu.css';
import {RiDashboardLine,RiAccountBoxLine,RiLogoutBoxLine} from 'react-icons/ri';
import {BsFillFolderFill,BsArrowLeft} from 'react-icons/bs' ;
import {FiTrendingUp} from 'react-icons/fi';
import {MdPayment}from 'react-icons/md'
import {FiHelpCircle} from 'react-icons/fi';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import Recommended from './recommendedcourses';
import MyCourses from './MyCourses/MyCoursesList';
import TrendingCourses from '../TrendingCourse/TrendingCourseList';
import PurchaseHistory from '../Purchase_history/purchasehistory';
import Account from '../Account/Profile/profileinfo';
class DashboardMenu extends React.Component {

	constructor( ) {
		super( );

		
			this.state={
                showDashboard: true,
                showMyCourses:false,
                showTrending:false,
                showAccount:false,
                showPayment:false 
              //  showHelp:false  
            //    showLogout:false
            
        };
        this.isSidebarOpen=this.isSidebarOpen.bind(this);
    }
    isSidebarOpen(name){
        switch(name){
            case "dashboard" :
                this.setState({showDashboard: true }  );   
                this.setState({showMyCourses: false }  );
                this.setState({showTrending: false }  );
                this.setState({showAccount: false }  );
                this.setState({showPayment:  false }  );   
                this.setState({showHelp: false }  );
                this.setState({showLogout: false }  );
                break;
                
            case "MyCourses" :
                    this.setState({showDashboard: false }  );   
                    this.setState({showMyCourses: true }  );
                    this.setState({showTrending: false }  );
                    this.setState({showAccount: false }  );
                    this.setState({showPayment:  false  }  );   
                    this.setState({showHelp: false }  );
                    this.setState({showLogout: false }  );  
                    break;  
            case "Trending" :
                        this.setState({showDashboard:  false  }  );   
                        this.setState({showMyCourses: false }  );
                        this.setState({showTrending:true }  );
                        this.setState({showAccount: false }  );
                        this.setState({showPayment:  false }  );   
                        this.setState({showHelp: false }  );
                        this.setState({showLogout: false }  );  
                        break; 
            case "Account" :
                            this.setState({showDashboard:  false  }  );   
                            this.setState({showMyCourses: false }  );
                            this.setState({showTrending: false }  );
                            this.setState({showAccount: true }  );
                            this.setState({showPayment:  false  }  );   
                            this.setState({showHelp: false }  );
                            this.setState({showLogout: false }  );
                            break;
            case "Payment" :
                        this.setState({showDashboard:  false }  );   
                        this.setState({showMyCourses: false }  );
                        this.setState({showTrending: false }  );
                        this.setState({showAccount: false }  );
                        this.setState({showPayment: true }  );   
                        this.setState({showHelp: false }  );
                        this.setState({showLogout: false }  );
                        break;
            // case "Help" :
            //                 this.setState({showDashboard:  false  }  );   
            //                 this.setState({showMyCourses: false }  );
            //                 this.setState({showTrending: false }  );
            //                 this.setState({showAccount: false }  );
            //                 this.setState({showPayment:  false  }  );   
            //                 this.setState({showHelp:true }  );
            //                 this.setState({showLogout: false }  );
            //                 break;
            // case "LogOut" :
            //                     this.setState({showDashboard: false  }  );   
            //                     this.setState({showMyCourses: false }  );
            //                     this.setState({showTrending: false }  );
            //                     this.setState({showAccount: false }  );
            //                     this.setState({showPayment: false }  );   
            //                     this.setState({showHelp: false }  );
            //                     this.setState({showLogout: true}  ); 
            //                     break;               
                    }
}

	render() {

        const { showPayment,showAccount,showTrending,showMyCourses,showDashboard} = this.state;

		return(
        <div id="dashboard-base">    
		<div > 
              <div>
                  <table  id='dashboard_username'>
                      <tr >

                          <td></td>
                          <td>
                          <BsArrowLeft 
                          id="dashboardupperarrow"
                          />
                          </td>
                      </tr>
                      <tr>
                          
                          <td >
                            <img id='dashboard_usericon' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                          </td>
                          <td >
                              <tr>Siddharth</tr>
                              
                          </td>
                      </tr>
                  </table>
              </div>
            <table id="dashboardmenulist">

                    
                        <tr >
                                                       
                             <tr class="dashboardlist" onClick={()=>this.isSidebarOpen("dashboard")}>
                                 <td ><RiDashboardLine/></td>
                                 <td class="dashboardlist"> Dashboard</td>
                             </tr>    
                            <tr class="dashboardlist"  onClick={()=>this.isSidebarOpen("MyCourses")}>
                                <td ><BsFillFolderFill/></td>
                                <td class="dashboardlist">My Course</td>
                            </tr>
                            <tr class="dashboardlist"  onClick={()=>this.isSidebarOpen("Trending")}>
                                <td ><FiTrendingUp/></td>
                                <td class="dashboardlist">Trending Course</td>
                            </tr>
                            <tr class="dashboardlist"  onClick={()=>this.isSidebarOpen("Account")}>
                                <td ><RiAccountBoxLine/></td>
                                <td class="dashboardlist">Account</td>
                                </tr>
                            <tr class="dashboardlist"  onClick={()=>this.isSidebarOpen("Payment")}>
                                <td ><MdPayment/></td>
                                <td class="dashboardlist">Payment details</td>
                                </tr>
                            <tr class="dashboardlist" /* onClick={()=>this.isSidebarOpen("Help")} */>
                                <td ><FiHelpCircle/></td>
                                <td class="dashboardlist"> Help</td>
                                
                               </tr>
                            <tr class="dashboardlist" /* onClick={()=>this.isSidebarOpen("LogOut")} */>
                                <td ><RiLogoutBoxLine/></td>
                                <td class="dashboardlist">Log Out</td>
                                </tr>
                        </tr>
            </table>
            <table >    
                        <tr>
                            <td class="dashboardicons"><AiOutlineFacebook/></td>
                            <td class="dashboardicons" ><AiFillYoutube/></td>
                            <td class="dashboardicons"><FaLinkedinIn/></td>
                            <td class="dashboardicons"><AiOutlineInstagram/></td>
                        </tr>
            </table>
        </div>
                    <div>
                    {showDashboard && <Recommended/>}
                    {showMyCourses && <MyCourses/>}
                    {showTrending && <TrendingCourses/>}
                    {showAccount && <Account/>}
                    {showPayment && <PurchaseHistory/>}
                     {/* {showHelp && console.log("Help")}
                     {showLogout && console.log("Logout")}  */}
                    </div> 
        
        </div>
        
        )
	}
}



export default DashboardMenu;
