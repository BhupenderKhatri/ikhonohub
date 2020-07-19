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
class Interncourse extends Component{
    render(){
      
      return (
          
<div class="intern-main">
  <Nav/>
  {/* <Coursesubject/> */}
  {/* <Whatyoulearn/> */}
  {/* <Courseconcept/> */}
  <Projecttitle/>
  <Programinclude/>
  {/* <Pricing/> */}
  <Answer/>
  <InternFooter/>
</div>



    
        );
    }
    }
    
    export default Interncourse;