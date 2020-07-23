import React ,{Component}from 'react';
import './interncourse.css';
import Projecttitle_Only4 from '../interncourse/projecttitle/project_title_only4';
import Programinclude from '../interncourse/programinclude/programinclude';
import Answer from '../interncourse/answers/answer';
import InternFooter from '../internfooter/internfooter';
import Pricing from '../interncourse/pricing/pricing';
import Coursesubject from '../interncourse/coursesubject/coursesubject';
import Nav from '../nav/nav';
import Whatyoulearn from './whatulearn/whatyoulearn';
import Courseconcept from './courseconcept/conceptcover';

import {IOS} from '../../FinalDetails';

class Intern_IOS extends Component{
    render(){
      
      return (
          
<div class="intern-main">
  <Nav/>
  {IOS.map((user,i)=>{
    return (
      <Coursesubject
      id={IOS[i].id}
      c1_1={IOS[i].c1_1}
      c1_1={IOS[i].c1_1}
      c1_2={IOS[i].c1_2}
      c1_3={IOS[i].c1_3}
      c1_4={IOS[i].c1_4}
      c1_5={IOS[i].c1_5}
      c1_6={IOS[i].c1_6}
      c1_7={IOS[i].c1_7}
      c1_8={IOS[i].c1_8}
      c1_9={IOS[i].c1_9}
      c1_10={IOS[i].c1_10}
      c1_11={IOS[i].c1_11}
      c1_12={IOS[i].c1_12}
      c1_13={IOS[i].c1_13}
      c1_14={IOS[i].c1_14}
      c1_15={IOS[i].c1_15}
      c1_16={IOS[i].c1_16}
      />
    );
  }
  )
  }
    
   {IOS.map((user,i)=> {
                    return(
                      <Whatyoulearn
                      c2_1={IOS[i].c2_1}
                      c2_2={IOS[i].c2_2}
                      c2_3={IOS[i].c2_3}
                      c2_4={IOS[i].c2_4}
                      c2_5={IOS[i].c2_5}
                      c2_6={IOS[i].c2_6}
                      />
                    );
  })
  }
   <Courseconcept/> 

   {IOS.map((user,i)=>{
     return(
      <Projecttitle_Only4
      c4_1={IOS[i].c4_1}
      c4_1a={IOS[i].c4_1a}
            c4_1b={IOS[i].c4_1b}
            c4_1c={IOS[i].c4_1c}
            
            c4_2 ={IOS[i].c4_2}
            c4_2a={IOS[i].c4_2a}
            c4_2b={IOS[i].c4_2b}
            c4_2c={IOS[i].c4_2c}
            c4_3 ={IOS[i].c4_3}
            c4_3a={IOS[i].c4_3a}
            c4_3b={IOS[i].c4_3b}
            c4_3c={IOS[i].c4_3c}
            c4_4 ={IOS[i].c4_4}
            c4_4a={IOS[i].c4_4a}
            c4_4b={IOS[i].c4_4b}
            c4_4c={IOS[i].c4_4c}
            c4_5 ={IOS[i].c4_5}
            c4_5a={IOS[i].c4_5a}
            c4_5b={IOS[i].c4_5b}
            c4_5c={IOS[i].c4_5c}
            
            c4_6 ={IOS[i].c4_6}
            c4_6a={IOS[i].c4_6a}
            c4_6b={IOS[i].c4_6b}
            c4_6c={IOS[i].c4_6c}
            c4_7 ={IOS[i].c4_7}
            c4_7a={IOS[i].c4_7a}
            c4_7b={IOS[i].c4_7b}
            c4_7c={IOS[i].c4_7c}
      />
     );
   })}
  

  {IOS.map((user,i)=>{
    return (
      <Programinclude
      c5_1={IOS[i].c5_1}
      c5_2={IOS[i].c5_2}
      c5_3={IOS[i].c5_3}
      c5_4={IOS[i].c5_4}
      c5_5={IOS[i].c5_5}
      c5_6={IOS[i].c5_6}
      c5_7={IOS[i].c5_7}
      c5_8={IOS[i].c5_8}
      />
    );
  }
  )}

{IOS.map((user,i)=>
{
  return(
    <Pricing
    c6_1={IOS[i].c6_1}
    c6_2={IOS[i].c6_2}
    c6_3={IOS[i].c6_3}
    c6_4={IOS[i].c6_4}
    c6_5={IOS[i].c6_5}
    c6_6={IOS[i].c6_6}
    c6_7={IOS[i].c6_7}
    c6_8={IOS[i].c6_8}
    c6_9={IOS[i].c6_9}
    c6_10={IOS[i].c6_10}
    c6_11={IOS[i].c6_11}
    c6_12={IOS[i].c6_12}
    c6_13={IOS[i].c6_13}
    c6_14={IOS[i].c6_14}
    c6_15={IOS[i].c6_15}
    c6_16={IOS[i].c6_16}
    c6_16a={IOS[i].c6_16a}
    c6_17={IOS[i].c6_17}
    c6_18={IOS[i].c6_18}
    c6_19={IOS[i].c6_19}
    c6_20={IOS[i].c6_20}
    c6_21={IOS[i].c6_21}
    c6_22={IOS[i].c6_22}
    c6_23={IOS[i].c6_23}
    c6_24={IOS[i].c6_24}
    c6_25={IOS[i].c6_25}
    c6_26={IOS[i].c6_26}
    c6_27={IOS[i].c6_27}
    c6_28={IOS[i].c6_28}

    />
  );
  })}
  

{
    IOS.map((user,i)=>
    {
      return(

        <Answer 
            ques1={IOS[i].ques1}
            ans1={IOS[i].ans1}
            ques2={IOS[i].ques2}
            ans2={IOS[i].ans2}
            ques3={IOS[i].ques3}
            ans3={IOS[i].ans3}
            ques4={IOS[i].ques4}
            ans4={IOS[i].ans4}
            />
      );
    })}
  <InternFooter/>
</div>



    
        );
    }
    }
    
    export default Intern_IOS;