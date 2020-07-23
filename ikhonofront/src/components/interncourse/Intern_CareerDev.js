import React ,{Component}from 'react';
import './interncourse.css';
import Projecttitle from './projecttitle/project_title';
import Programinclude from './programinclude/programinclude';
import Answer from './answers/answer';
import InternFooter from '../internfooter/internfooter';
import PricingOnlyBasic from './pricing/pricingOnlyBasic';
import Coursesubject from './coursesubject/coursesubject';
import Nav from '../nav/nav';
import Whatyoulearn from './whatulearn/whatyoulearn';
import Courseconcept from './courseconcept/conceptcover';

import {CareerDev} from '../../FinalDetails';

class InternCareerDev extends Component{
    render(){
      
      return (
          
<div class="intern-main">
  <Nav/>
  {CareerDev.map((user,i)=>{
    return (
      <Coursesubject
      c1_1={CareerDev[i].c1_1}
      c1_2={CareerDev[i].c1_2}
      c1_3={CareerDev[i].c1_3}
      c1_4={CareerDev[i].c1_4}
      c1_5={CareerDev[i].c1_5}
      c1_6={CareerDev[i].c1_6}
      c1_7={CareerDev[i].c1_7}
      c1_8={CareerDev[i].c1_8}
      c1_9={CareerDev[i].c1_9}
      c1_10={CareerDev[i].c1_10}
      c1_11={CareerDev[i].c1_11}
      c1_12={CareerDev[i].c1_12}
      c1_13={CareerDev[i].c1_13}
      c1_14={CareerDev[i].c1_14}
      c1_15={CareerDev[i].c1_15}
      c1_16={CareerDev[i].c1_16}
      />
    );
  }
  )
  }
    
   {CareerDev.map((user,i)=> {
                    return(
                      <Whatyoulearn
                      c2_1={CareerDev[i].c2_1}
                      c2_2={CareerDev[i].c2_2}
                      c2_3={CareerDev[i].c2_3}
                      c2_4={CareerDev[i].c2_4}
                      c2_5={CareerDev[i].c2_5}
                      c2_6={CareerDev[i].c2_6}
                      />
                    );
  })
  }
   <Courseconcept/> 

   {CareerDev.map((user,i)=>{
     return(
      <Projecttitle
      c4_1={CareerDev[i].c4_1}
      c4_1a={CareerDev[i].c4_1a}
            c4_1b={CareerDev[i].c4_1b}
            c4_1c={CareerDev[i].c4_1c}
            
            c4_2 ={CareerDev[i].c4_2}
            c4_2a={CareerDev[i].c4_2a}
            c4_2b={CareerDev[i].c4_2b}
            c4_2c={CareerDev[i].c4_2c}
            c4_3 ={CareerDev[i].c4_3}
            c4_3a={CareerDev[i].c4_3a}
            c4_3b={CareerDev[i].c4_3b}
            c4_3c={CareerDev[i].c4_3c}
            c4_4 ={CareerDev[i].c4_4}
            c4_4a={CareerDev[i].c4_4a}
            c4_4b={CareerDev[i].c4_4b}
            c4_4c={CareerDev[i].c4_4c}
            c4_5 ={CareerDev[i].c4_5}
            c4_5a={CareerDev[i].c4_5a}
            c4_5b={CareerDev[i].c4_5b}
            c4_5c={CareerDev[i].c4_5c}
            
            c4_6 ={CareerDev[i].c4_6}
            c4_6a={CareerDev[i].c4_6a}
            c4_6b={CareerDev[i].c4_6b}
            c4_6c={CareerDev[i].c4_6c}
            c4_7 ={CareerDev[i].c4_7}
            c4_7a={CareerDev[i].c4_7a}
            c4_7b={CareerDev[i].c4_7b}
            c4_7c={CareerDev[i].c4_7c}
      />
     );
   })}
  

  {CareerDev.map((user,i)=>{
    return (
      <Programinclude
      c5_1={CareerDev[i].c5_1}
      c5_2={CareerDev[i].c5_2}
      c5_3={CareerDev[i].c5_3}
      c5_4={CareerDev[i].c5_4}
      c5_5={CareerDev[i].c5_5}
      c5_6={CareerDev[i].c5_6}
      c5_7={CareerDev[i].c5_7}
      c5_8={CareerDev[i].c5_8}
      />
    );
  }
  )}

{CareerDev.map((user,i)=>
{
  return(
    <PricingOnlyBasic
    c6_1={CareerDev[i].c6_1}
    c6_2={CareerDev[i].c6_2}
    c6_3={CareerDev[i].c6_3}
    c6_4={CareerDev[i].c6_4}
    c6_5={CareerDev[i].c6_5}
    c6_6={CareerDev[i].c6_6}
    c6_7={CareerDev[i].c6_7}
    c6_8={CareerDev[i].c6_8}
    c6_8a={CareerDev[i].c6_8a}
    c6_8b={CareerDev[i].c6_8b}
    c6_8c={CareerDev[i].c6_8c}
    c6_8d={CareerDev[i].c6_8d}
     />
  );
  })}
  

{
CareerDev.map((user,i)=>
    {
      return(

        <Answer 
            ques1={CareerDev[i].ques1}
            ans1={CareerDev[i].ans1}
            ques2={CareerDev[i].ques2}
            ans2={CareerDev[i].ans2}
            ques3={CareerDev[i].ques3}
            ans3={CareerDev[i].ans3}
            ques4={CareerDev[i].ques4}
            ans4={CareerDev[i].ans4}
            />
      );
    })}
  <InternFooter/>
</div>



    
        );
    }
    }
    
    export default InternCareerDev;