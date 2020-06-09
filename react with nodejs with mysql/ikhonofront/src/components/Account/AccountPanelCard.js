import React  from 'react' ;
import {FaWallet} from 'react-icons/fa' ;
import  {MdAccountBox} from 'react-icons/md' ;
import {MdPayment} from  'react-icons/md' ;
import {AiOutlineArrowRight} from 'react-icons/ai' ;
import './AccountPanelCard.css' ;
import {  } from "module";


const Accounting=({username,emailid})=>{
        return(
            <div class="tablealign">
                 
                            {/* <table>
                                <tr>
                                    <td className='bg-white'>
                                        {username}
                                    </td>
                                    <td  className='bg-white'>
                                       {emailid}
                                    </td>  
                                </tr>
                            </table> */}

                            
                            <button class="icons" onClick={() => this.hideComponent("showHideDemo1")}> My Courses</button> 
                            
                            <button class="icons1" onClick={() => this.hideComponent("showHideDemo3")}>Profile Information</button> 
                           
                            <button class="icons" onClick={() => this.hideComponent("showHideDemo4")}>Manage Address</button> 
                           
                           <button class="icons1" onClick={() => this.hideComponent("showHideDemo6")}> Phone Pe Wallet</button> 
                           
                           <button class="icons" onClick={() => this.hideComponent("showHideDemo7")}>Gift Card</button> 
                           
                          <button class="icons1" onClick={() => this.hideComponent("showHideDemo8")}> Saved Card </button> 
           </div>
        );
    }


export default Accounting ;