import React ,{Component} from 'react';
import './Accountboard.css';
import Dashboardnav from '../dashboardnav/dashboardnav';
import Acc_footer from '../profile_footer/acc_footer';



import AccountCard from '../Account/AccountPanelCard';
import PurchaseHistory from '../Purchase_history/purchasehistory';

import ProfileInfo from '../Account/Profile/profileinfo';
import Address from '../Account/Profile/address';
import Wallet from '../Account/payment/wallet';
import GiftCard from '../Account/payment/giftcard';
import SavedCard from '../Account/payment/savedcards';



class Accountboard extends Component {
 
  constructor(){

    super();
    this.state={
        showHideDemo1:false,
        showHideDemo2:false,
        showHideDemo3:true,
        showHideDemo4:false,
        showHideDemo5:false,
        showHideDemo6:false,
        showHideDemo7:false,
        showHideDemo8:false
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
            this.setState({showHideDemo5: false }  );
            this.setState({showHideDemo6: false }  );
            this.setState({showHideDemo7: false }  );
            this.setState({showHideDemo8: false }  );
            break;
        case "showHideDemo2":
            this.setState({showHideDemo1: false }  );   
            this.setState({showHideDemo2: true }  );
            this.setState({showHideDemo3: false }  );
            this.setState({showHideDemo4: false }  );
            this.setState({showHideDemo5: false }  );
            this.setState({showHideDemo6: false }  );
            this.setState({showHideDemo7: false }  );
            this.setState({showHideDemo8: false }  );
            break;
        case "showHideDemo3":
            this.setState({showHideDemo1: false }  );   
            this.setState({showHideDemo2: false }  );
            this.setState({showHideDemo3: true }  );
            this.setState({showHideDemo4: false }  );
            this.setState({showHideDemo5: false }  );
            this.setState({showHideDemo6: false }  );
            this.setState({showHideDemo7: false }  );
            this.setState({showHideDemo8: false }  );
            break;
        case "showHideDemo4":
            this.setState({showHideDemo1: false }  );   
            this.setState({showHideDemo2: false }  );
            this.setState({showHideDemo3: false }  );
            this.setState({showHideDemo4: true }  );
            this.setState({showHideDemo5: false }  );
            this.setState({showHideDemo6: false }  );
            this.setState({showHideDemo7: false }  );
            this.setState({showHideDemo8: false }  );
            break;
        case "showHideDemo5":
            this.setState({showHideDemo1: false }  );   
            this.setState({showHideDemo2: false }  );
            this.setState({showHideDemo3: false }  );
            this.setState({showHideDemo4: false }  );
            this.setState({showHideDemo5: true }  );
            this.setState({showHideDemo6: false }  );
            this.setState({showHideDemo7: false }  );
            this.setState({showHideDemo8: false }  );
            break;
        case "showHideDemo6":
            this.setState({showHideDemo1: false }  );   
            this.setState({showHideDemo2: false }  );
            this.setState({showHideDemo3: false }  );
            this.setState({showHideDemo4: false }  );
            this.setState({showHideDemo5: false }  );
            this.setState({showHideDemo6: true }  );
            this.setState({showHideDemo7: false }  );
            this.setState({showHideDemo8: false }  );
            break;
        case "showHideDemo7":
            this.setState({showHideDemo1: false }  ); 
            this.setState({showHideDemo2: false }  );
            this.setState({showHideDemo3: false }  );
            this.setState({showHideDemo4: false }  );
            this.setState({showHideDemo5: false }  );
            this.setState({showHideDemo6: false }  );
            this.setState({showHideDemo7: true }  );
            this.setState({showHideDemo8: false }  );
            break;
        case "showHideDemo8":
            this.setState({showHideDemo1: false }  );   
            this.setState({showHideDemo2: false }  );
            this.setState({showHideDemo3: false }  );
            this.setState({showHideDemo4: false}  );
            this.setState({showHideDemo5: false }  );
            this.setState({showHideDemo6: false }  );
            this.setState({showHideDemo7: false }  );
            this.setState({showHideDemo8: true }  );
            break;
       default:
           ;
    }

}

 render(){
  const {showHideDemo1,showHideDemo2,showHideDemo3,showHideDemo4,showHideDemo5,showHideDemo6,showHideDemo7,showHideDemo8}=this.state;
    return (
    <div class="accountboard">
        <Dashboardnav />
    <div id="tablealign"> 
        <div>
        
                              <button class="icons" onClick={() => this.hideComponent("showHideDemo1")}> My Courses</button> 
                            
                             <button class="icons1" onClick={() => this.hideComponent("showHideDemo3")}>Profile Information</button> 
                            
                             <button class="icons" onClick={() => this.hideComponent("showHideDemo4")}>Manage Address</button> 
                            
                            <button class="icons1" onClick={() => this.hideComponent("showHideDemo6")}> Phone Pe Wallet</button> 
                            
                            <button class="icons" onClick={() => this.hideComponent("showHideDemo7")}>Gift Card</button> 
                            
                           <button class="icons1" onClick={() => this.hideComponent("showHideDemo8")}> Saved Card </button> 
                            
            </div>
                 <div id='right-cards'> 

                        {showHideDemo1 && <PurchaseHistory/> }
                        
                        {showHideDemo2 }
                           
                        {showHideDemo3 && <ProfileInfo />}
                             
                        {showHideDemo4 && <Address />}

                        {showHideDemo5 }
                            
                        {showHideDemo6 && <Wallet />}
                           
                        {showHideDemo7 && <GiftCard />}
                             
                        {showHideDemo8 && <SavedCard />}
                        
                        
                </div>
         </div>
    
      <Acc_footer/> 
    </div>
  );
}
}
export default Accountboard;