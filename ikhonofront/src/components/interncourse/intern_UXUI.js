import React ,{Component}from 'react';
import './interncourse.css';
import Projecttitle_onlyfour from './projecttitle/project_title_only4';
import Programinclude from './programinclude/programinclude';
import Answer from './answers/answer';
import InternFooter from '../internfooter/internfooter';
import Pricing from './pricing/pricing';
import Coursesubject from './coursesubject/coursesubject';
import Nav from '../nav/nav';
import Whatyoulearn from './whatulearn/whatyoulearn';
import Courseconcept from './courseconcept/conceptcover';

import {UxUi} from '../../FinalDetails';
import Projecttitle_only4 from './projecttitle/project_title_only4';

class Intern_UxUi extends Component{
    render(){
      
      return (
          
<div class="intern-main">
  <Nav/>
  { UxUi.map((user,i)=>{
    return (
      <Coursesubject
      c1_1={ UxUi[i].c1_1}
      c1_2={ UxUi[i].c1_2}
      c1_3={ UxUi[i].c1_3}
      c1_4={ UxUi[i].c1_4}
      c1_5={ UxUi[i].c1_5}
      c1_6={ UxUi[i].c1_6}
      c1_7={ UxUi[i].c1_7}
      c1_8={ UxUi[i].c1_8}
      c1_9={ UxUi[i].c1_9}
      c1_10={ UxUi[i].c1_10}
      c1_11={ UxUi[i].c1_11}
      c1_12={ UxUi[i].c1_12}
      c1_13={ UxUi[i].c1_13}
      c1_14={ UxUi[i].c1_14}
      c1_15={ UxUi[i].c1_15}
      c1_16={ UxUi[i].c1_16}
      />
    );
  }
  )
  }
    
   { UxUi.map((user,i)=> {
                    return(
                      <Whatyoulearn
                      c2_1={ UxUi[i].c2_1}
                      c2_2={ UxUi[i].c2_2}
                      c2_3={ UxUi[i].c2_3}
                      c2_4={ UxUi[i].c2_4}
                      c2_5={ UxUi[i].c2_5}
                      c2_6={ UxUi[i].c2_6}
                      />
                    );
  })
  }
   <Courseconcept/> 

   { UxUi.map((user,i)=>{
     return(
      <Projecttitle_onlyfour
      c4_1={ UxUi[i].c4_1}
      c4_1a={ UxUi[i].c4_1a}
            c4_1b={ UxUi[i].c4_1b}
            c4_1c={ UxUi[i].c4_1c}
            
            c4_2 ={ UxUi[i].c4_2}
            c4_2a={ UxUi[i].c4_2a}
            c4_2b={ UxUi[i].c4_2b}
            c4_2c={ UxUi[i].c4_2c}
            c4_3 ={ UxUi[i].c4_3}
            c4_3a={ UxUi[i].c4_3a}
            c4_3b={ UxUi[i].c4_3b}
            c4_3c={ UxUi[i].c4_3c}
            c4_4 ={ UxUi[i].c4_4}
            c4_4a={ UxUi[i].c4_4a}
            c4_4b={ UxUi[i].c4_4b}
            c4_4c={ UxUi[i].c4_4c}
            c4_5 ={ UxUi[i].c4_5}
            c4_5a={ UxUi[i].c4_5a}
            c4_5b={ UxUi[i].c4_5b}
            c4_5c={ UxUi[i].c4_5c}
            
            c4_6 ={ UxUi[i].c4_6}
            c4_6a={ UxUi[i].c4_6a}
            c4_6b={ UxUi[i].c4_6b}
            c4_6c={ UxUi[i].c4_6c}
            c4_7 ={ UxUi[i].c4_7}
            c4_7a={ UxUi[i].c4_7a}
            c4_7b={ UxUi[i].c4_7b}
            c4_7c={ UxUi[i].c4_7c}
      />
     );
   })}
  

  { UxUi.map((user,i)=>{
    return (
      <Programinclude
      c5_1={UxUi[i].c5_1}
      c5_2={UxUi[i].c5_2}
      c5_3={UxUi[i].c5_3}
      c5_4={UxUi[i].c5_4}
      c5_5={UxUi[i].c5_5}
      c5_6={UxUi[i].c5_6}
      c5_7={UxUi[i].c5_7}
      c5_8={UxUi[i].c5_8}
      />
    );
  }
  )}

{ UxUi.map((user,i)=>
{
  return(
    <Pricing
    c6_1={ UxUi[i].c6_1}
    c6_2={ UxUi[i].c6_2}
    c6_3={ UxUi[i].c6_3}
    c6_4={ UxUi[i].c6_4}
    c6_5={ UxUi[i].c6_5}
    c6_6={ UxUi[i].c6_6}
    c6_7={ UxUi[i].c6_7}
    c6_8={ UxUi[i].c6_8}
    c6_9={ UxUi[i].c6_9}
    c6_10={ UxUi[i].c6_10}
    c6_11={ UxUi[i].c6_11}
    c6_12={ UxUi[i].c6_12}
    c6_13={ UxUi[i].c6_13}
    c6_14={ UxUi[i].c6_14}
    c6_15={ UxUi[i].c6_15}
    c6_16={ UxUi[i].c6_16}
    c6_16a={ UxUi[i].c6_16a}
    c6_17={ UxUi[i].c6_17}
    c6_18={ UxUi[i].c6_18}
    c6_19={ UxUi[i].c6_19}
    c6_20={ UxUi[i].c6_20}
    c6_21={ UxUi[i].c6_21}
    c6_22={ UxUi[i].c6_22}
    c6_23={ UxUi[i].c6_23}
    c6_24={ UxUi[i].c6_24}
    c6_25={ UxUi[i].c6_25}
    c6_26={ UxUi[i].c6_26}
    c6_27={ UxUi[i].c6_27}
    c6_28={ UxUi[i].c6_28}

    />
  );
  })}
  

{
     UxUi.map((user,i)=>
    {
      return(

        <Answer 
            ques1={ UxUi[i].ques1}
            ans1={ UxUi[i].ans1}
            ques2={ UxUi[i].ques2}
            ans2={ UxUi[i].ans2}
            ques3={ UxUi[i].ques3}
            ans3={ UxUi[i].ans3}
            ques4={ UxUi[i].ques4}
            ans4={ UxUi[i].ans4}
            ques5={ UxUi[i].ques5}
            ans5={ UxUi[i].ans5}
            ques6={ UxUi[i].ques6}
            ans6={ UxUi[i].ans6}
            ques7={ UxUi[i].ques7}
            ans7={ UxUi[i].ans7}
            ques8={ UxUi[i].ques8}
            ans8={ UxUi[i].ans8}
            />
      );
    })}
  <InternFooter/>
</div>



    
        );
    }
    }
    
    export default Intern_UxUi;