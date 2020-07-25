import React ,{Component}from 'react';
import './interncourse.css';
import Projecttitle from '../interncourse/projecttitle/project_title';
import Programinclude from '../interncourse/programinclude/programinclude';
import Answer from '../interncourse/answers/answer';
import InternFooter from '../internfooter/internfooter';
import Pricing from '../interncourse/pricing/pricing';
import Coursesubject from '../interncourse/coursesubject/coursesubject';
import Nav from '../nav/nav';
import Whatyoulearn from './whatulearn/whatyoulearn';
import Courseconcept from './courseconcept/conceptcover';

import {machinelearning} from '../../FinalDetails';

class Interncourse extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
}  
  render(){
      
      return (
          
<div class="intern-main">
  <Nav/>
  {machinelearning.map((user,i)=>{
    return (
      <Coursesubject
      c1_1={machinelearning[i].c1_1}
      c1_2={machinelearning[i].c1_2}
      c1_3={machinelearning[i].c1_3}
      c1_4={machinelearning[i].c1_4}
      c1_5={machinelearning[i].c1_5}
      c1_6={machinelearning[i].c1_6}
      c1_7={machinelearning[i].c1_7}
      c1_8={machinelearning[i].c1_8}
      c1_9={machinelearning[i].c1_9}
      c1_10={machinelearning[i].c1_10}
      c1_11={machinelearning[i].c1_11}
      c1_12={machinelearning[i].c1_12}
      c1_13={machinelearning[i].c1_13}
      c1_14={machinelearning[i].c1_14}
      c1_15={machinelearning[i].c1_15}
      c1_16={machinelearning[i].c1_16}
      />
    );
  }
  )
  }
    
   {machinelearning.map((user,i)=> {
                    return(
                      <Whatyoulearn
                      c2_1={machinelearning[i].c2_1}
                      c2_2={machinelearning[i].c2_2}
                      c2_3={machinelearning[i].c2_3}
                      c2_4={machinelearning[i].c2_4}
                      c2_5={machinelearning[i].c2_5}
                      c2_6={machinelearning[i].c2_6}
                      />
                    );
  })
  }
   <Courseconcept/> 

   {machinelearning.map((user,i)=>{
     return(
      <Projecttitle
      c4_1={machinelearning[i].c4_1}
      c4_1a={machinelearning[i].c4_1a}
            c4_1b={machinelearning[i].c4_1b}
            c4_1c={machinelearning[i].c4_1c}
            
            c4_2 ={machinelearning[i].c4_2}
            c4_2a={machinelearning[i].c4_2a}
            c4_2b={machinelearning[i].c4_2b}
            c4_2c={machinelearning[i].c4_2c}
            c4_3 ={machinelearning[i].c4_3}
            c4_3a={machinelearning[i].c4_3a}
            c4_3b={machinelearning[i].c4_3b}
            c4_3c={machinelearning[i].c4_3c}
            c4_4 ={machinelearning[i].c4_4}
            c4_4a={machinelearning[i].c4_4a}
            c4_4b={machinelearning[i].c4_4b}
            c4_4c={machinelearning[i].c4_4c}
            c4_5 ={machinelearning[i].c4_5}
            c4_5a={machinelearning[i].c4_5a}
            c4_5b={machinelearning[i].c4_5b}
            c4_5c={machinelearning[i].c4_5c}
            
            c4_6 ={machinelearning[i].c4_6}
            c4_6a={machinelearning[i].c4_6a}
            c4_6b={machinelearning[i].c4_6b}
            c4_6c={machinelearning[i].c4_6c}
            c4_7 ={machinelearning[i].c4_7}
            c4_7a={machinelearning[i].c4_7a}
            c4_7b={machinelearning[i].c4_7b}
            c4_7c={machinelearning[i].c4_7c}
      />
     );
   })}
  

  {machinelearning.map((user,i)=>{
    return (
      <Programinclude
      c5_1={machinelearning[i].c5_1}
      c5_2={machinelearning[i].c5_2}
      c5_3={machinelearning[i].c5_3}
      c5_4={machinelearning[i].c5_4}
      c5_5={machinelearning[i].c5_5}
      c5_6={machinelearning[i].c5_6}
      c5_7={machinelearning[i].c5_7}
      c5_8={machinelearning[i].c5_8}
      />
    );
  }
  )}

{machinelearning.map((user,i)=>
{
  return(
    <Pricing
    c6_1={machinelearning[i].c6_1}
    c6_2={machinelearning[i].c6_2}
    c6_3={machinelearning[i].c6_3}
    c6_4={machinelearning[i].c6_4}
    c6_5={machinelearning[i].c6_5}
    c6_6={machinelearning[i].c6_6}
    c6_7={machinelearning[i].c6_7}
    c6_8={machinelearning[i].c6_8}
    c6_9={machinelearning[i].c6_9}
    c6_10={machinelearning[i].c6_10}
    c6_11={machinelearning[i].c6_11}
    c6_12={machinelearning[i].c6_12}
    c6_13={machinelearning[i].c6_13}
    c6_14={machinelearning[i].c6_14}
    c6_15={machinelearning[i].c6_15}
    c6_16={machinelearning[i].c6_16}
    c6_17={machinelearning[i].c6_17}
    c6_18={machinelearning[i].c6_18}
    c6_19={machinelearning[i].c6_19}
    c6_20={machinelearning[i].c6_20}
    c6_21={machinelearning[i].c6_21}
    c6_22={machinelearning[i].c6_22}
    c6_23={machinelearning[i].c6_23}
    c6_24={machinelearning[i].c6_24}
    />
  );
  })}
  

{
    machinelearning.map((user,i)=>
    {
      return(

        <Answer 
            ques1={machinelearning[i].ques1}
            ans1={machinelearning[i].ans1}
            ques2={machinelearning[i].ques2}
            ans2={machinelearning[i].ans2}
            ques3={machinelearning[i].ques3}
            ans3={machinelearning[i].ans3}
            ques4={machinelearning[i].ques4}
            ans4={machinelearning[i].ans4}
            />
      );
    })}
  <InternFooter/>
</div>



    
        );
    }
    }
    
    export default Interncourse;