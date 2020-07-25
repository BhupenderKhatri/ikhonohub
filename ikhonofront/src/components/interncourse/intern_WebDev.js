import React ,{Component}from 'react';
import './interncourse.css';
import Projecttitle_onlythree from './projecttitle/project_title_only3';
import Programinclude from './programinclude/programinclude';
import Answer from './answers/answer';
import InternFooter from '../internfooter/internfooter';
import Pricing from './pricing/pricing';
import Coursesubject from './coursesubject/coursesubject';
import Nav from '../nav/nav';
import Whatyoulearn from './whatulearn/whatyoulearn';
import Courseconcept from './courseconcept/conceptcoverweb';

import { WebDev} from '../../FinalDetails';

class Intern_WebDev extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
}
    render(){
      
      return (
          
<div class="intern-main">
  <Nav/>
  { WebDev.map((user,i)=>{
    return (
      <Coursesubject
      id={ WebDev[i].id}
      c1_1={ WebDev[i].c1_1}
      c1_2={ WebDev[i].c1_2}
      c1_3={ WebDev[i].c1_3}
      c1_4={ WebDev[i].c1_4}
      c1_5={ WebDev[i].c1_5}
      c1_6={ WebDev[i].c1_6}
      c1_7={ WebDev[i].c1_7}
      c1_8={ WebDev[i].c1_8}
      c1_9={ WebDev[i].c1_9}
      c1_10={ WebDev[i].c1_10}
      c1_11={ WebDev[i].c1_11}
      c1_12={ WebDev[i].c1_12}
      c1_13={ WebDev[i].c1_13}
      c1_14={ WebDev[i].c1_14}
      c1_15={ WebDev[i].c1_15}
      c1_16={ WebDev[i].c1_16}
      />
    );
  }
  )
  }
    
   { WebDev.map((user,i)=> {
                    return(
                      <Whatyoulearn
                      c2_1={ WebDev[i].c2_1}
                      c2_2={ WebDev[i].c2_2}
                      c2_3={ WebDev[i].c2_3}
                      c2_4={ WebDev[i].c2_4}
                      c2_5={ WebDev[i].c2_5}
                      c2_6={ WebDev[i].c2_6}
                      />
                    );
  })
  }
   <Courseconcept/> 

   { WebDev.map((user,i)=>{
     return(
      <Projecttitle_onlythree
      c4_1={ WebDev[i].c4_1}
      c4_1a={ WebDev[i].c4_1a}
            c4_1b={ WebDev[i].c4_1b}
            c4_1c={ WebDev[i].c4_1c}
            
            c4_2 ={ WebDev[i].c4_2}
            c4_2a={ WebDev[i].c4_2a}
            c4_2b={ WebDev[i].c4_2b}
            c4_2c={ WebDev[i].c4_2c}
            c4_3 ={ WebDev[i].c4_3}
            c4_3a={ WebDev[i].c4_3a}
            c4_3b={ WebDev[i].c4_3b}
            c4_3c={ WebDev[i].c4_3c}
          
           
      />
     );
   })}
  

  { WebDev.map((user,i)=>{
    return (
      <Programinclude
      c5_1={WebDev[i].c5_1}
      c5_2={WebDev[i].c5_2}
      c5_3={WebDev[i].c5_3}
      c5_4={WebDev[i].c5_4}
      c5_5={WebDev[i].c5_5}
      c5_6={WebDev[i].c5_6}
      c5_7={WebDev[i].c5_7}
      c5_8={WebDev[i].c5_8}
      />
    );
  }
  )}

{ WebDev.map((user,i)=>
{
  return(
    <Pricing
    c6_1={ WebDev[i].c6_1}
    c6_2={ WebDev[i].c6_2}
    c6_3={ WebDev[i].c6_3}
    c6_4={ WebDev[i].c6_4}
    c6_5={ WebDev[i].c6_5}
    c6_6={ WebDev[i].c6_6}
    c6_7={ WebDev[i].c6_7}
    c6_8={ WebDev[i].c6_8}
    c6_9={ WebDev[i].c6_9}
    c6_10={ WebDev[i].c6_10}
    c6_11={ WebDev[i].c6_11}
    c6_12={ WebDev[i].c6_12}
    c6_13={ WebDev[i].c6_13}
    c6_14={ WebDev[i].c6_14}
    c6_15={ WebDev[i].c6_15}
    c6_16={ WebDev[i].c6_16}
    c6_16a={ WebDev[i].c6_16a}
    c6_17={ WebDev[i].c6_17}
    c6_18={ WebDev[i].c6_18}
    c6_19={ WebDev[i].c6_19}
    c6_20={ WebDev[i].c6_20}
    c6_21={ WebDev[i].c6_21}
    c6_22={ WebDev[i].c6_22}
    c6_23={ WebDev[i].c6_23}
    c6_24={ WebDev[i].c6_24}
    c6_25={ WebDev[i].c6_25}
    c6_26={ WebDev[i].c6_26}
    c6_27={ WebDev[i].c6_27}
    c6_28={ WebDev[i].c6_28}

    />
  );
  })}
  

{
     WebDev.map((user,i)=>
    {
      return(

        <Answer 
            ques1={ WebDev[i].ques1}
            ans1={ WebDev[i].ans1}
            ques2={ WebDev[i].ques2}
            ans2={ WebDev[i].ans2}
            ques3={ WebDev[i].ques3}
            ans3={ WebDev[i].ans3}
            ques4={ WebDev[i].ques4}
            ans4={ WebDev[i].ans4}
            />
      );
    })}
  <InternFooter/>
</div>



    
        );
    }
    }
    
    export default Intern_WebDev;