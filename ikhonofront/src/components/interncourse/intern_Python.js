import React ,{Component}from 'react';
import './interncourse.css';
import Projecttitle from './projecttitle/project_title';
import Programinclude from './programinclude/programinclude';
import Answer from './answers/answer';
import InternFooter from '../internfooter/internfooter';
import Pricing from './pricing/pricing';
import Coursesubject from './coursesubject/coursesubject';
import Nav from '../nav/nav';
import Whatyoulearn from './whatulearn/whatyoulearn';
import Courseconcept from './courseconcept/conceptcover';

import {Python} from '../../FinalDetails';

class Intern_Python extends Component{
    render(){
      
      return (
          
<div class="intern-main">
  <Nav/>
  { Python.map((user,i)=>{
    return (
      <Coursesubject
      c1_1={ Python[i].c1_1}
      c1_2={ Python[i].c1_2}
      c1_3={ Python[i].c1_3}
      c1_4={ Python[i].c1_4}
      c1_5={ Python[i].c1_5}
      c1_6={ Python[i].c1_6}
      c1_7={ Python[i].c1_7}
      c1_8={ Python[i].c1_8}
      c1_9={ Python[i].c1_9}
      c1_10={ Python[i].c1_10}
      c1_11={ Python[i].c1_11}
      c1_12={ Python[i].c1_12}
      c1_13={ Python[i].c1_13}
      c1_14={ Python[i].c1_14}
      c1_15={ Python[i].c1_15}
      c1_16={ Python[i].c1_16}
      />
    );
  }
  )
  }
    
   { Python.map((user,i)=> {
                    return(
                      <Whatyoulearn
                      c2_1={ Python[i].c2_1}
                      c2_2={ Python[i].c2_2}
                      c2_3={ Python[i].c2_3}
                      c2_4={ Python[i].c2_4}
                      c2_5={ Python[i].c2_5}
                      c2_6={ Python[i].c2_6}
                      />
                    );
  })
  }
   <Courseconcept/> 

   { Python.map((user,i)=>{
     return(
      <Projecttitle
      c4_1={ Python[i].c4_1}
      c4_1a={ Python[i].c4_1a}
            c4_1b={ Python[i].c4_1b}
            c4_1c={ Python[i].c4_1c}
            
            c4_2 ={ Python[i].c4_2}
            c4_2a={ Python[i].c4_2a}
            c4_2b={ Python[i].c4_2b}
            c4_2c={ Python[i].c4_2c}
            c4_3 ={ Python[i].c4_3}
            c4_3a={ Python[i].c4_3a}
            c4_3b={ Python[i].c4_3b}
            c4_3c={ Python[i].c4_3c}
            c4_4 ={ Python[i].c4_4}
            c4_4a={ Python[i].c4_4a}
            c4_4b={ Python[i].c4_4b}
            c4_4c={ Python[i].c4_4c}
            c4_5 ={ Python[i].c4_5}
            c4_5a={ Python[i].c4_5a}
            c4_5b={ Python[i].c4_5b}
            c4_5c={ Python[i].c4_5c}
            
            c4_6 ={ Python[i].c4_6}
            c4_6a={ Python[i].c4_6a}
            c4_6b={ Python[i].c4_6b}
            c4_6c={ Python[i].c4_6c}
            c4_7 ={ Python[i].c4_7}
            c4_7a={ Python[i].c4_7a}
            c4_7b={ Python[i].c4_7b}
            c4_7c={ Python[i].c4_7c}
      />
     );
   })}
  

  { Python.map((user,i)=>{
    return (
      <Programinclude
      c5_1={Python[i].c5_1}
      c5_2={Python[i].c5_2}
      c5_3={Python[i].c5_3}
      c5_4={Python[i].c5_4}
      c5_5={Python[i].c5_5}
      c5_6={Python[i].c5_6}
      c5_7={Python[i].c5_7}
      c5_8={Python[i].c5_8}
      />
    );
  }
  )}

{ Python.map((user,i)=>
{
  return(
    <Pricing
    c6_1={ Python[i].c6_1}
    c6_2={ Python[i].c6_2}
    c6_3={ Python[i].c6_3}
    c6_4={ Python[i].c6_4}
    c6_5={ Python[i].c6_5}
    c6_6={ Python[i].c6_6}
    c6_7={ Python[i].c6_7}
    c6_8={ Python[i].c6_8}
    c6_9={ Python[i].c6_9}
    c6_10={ Python[i].c6_10}
    c6_11={ Python[i].c6_11}
    c6_12={ Python[i].c6_12}
    c6_13={ Python[i].c6_13}
    c6_14={ Python[i].c6_14}
    c6_15={ Python[i].c6_15}
    c6_16={ Python[i].c6_16}
    c6_16a={ Python[i].c6_16a}
    c6_17={ Python[i].c6_17}
    c6_18={ Python[i].c6_18}
    c6_19={ Python[i].c6_19}
    c6_20={ Python[i].c6_20}
    c6_21={ Python[i].c6_21}
    c6_22={ Python[i].c6_22}
    c6_23={ Python[i].c6_23}
    c6_24={ Python[i].c6_24}
    c6_25={ Python[i].c6_25}
    c6_26={ Python[i].c6_26}
    c6_27={ Python[i].c6_27}
    c6_28={ Python[i].c6_28}

    />
  );
  })}
  

{
     Python.map((user,i)=>
    {
      return(

        <Answer 
            ques1={ Python[i].ques1}
            ans1={ Python[i].ans1}
            ques2={ Python[i].ques2}
            ans2={ Python[i].ans2}
            ques3={ Python[i].ques3}
            ans3={ Python[i].ans3}
            ques4={ Python[i].ques4}
            ans4={ Python[i].ans4}
            ques5={ Python[i].ques5}
            ans5={ Python[i].ans5}
            ques6={ Python[i].ques6}
            ans6={ Python[i].ans6}
            ques7={ Python[i].ques7}
            ans7={ Python[i].ans7}
            ques8={ Python[i].ques8}
            ans8={ Python[i].ans8}
            />
      );
    })}
  <InternFooter/>
</div>



    
        );
    }
    }
    
    export default Intern_Python;