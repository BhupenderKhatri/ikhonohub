import React,{Component} from 'react';
import './curriculumnCardDark.css';
import CardWhite from './Random' ;
import {coursesHeaderDark} from '../../curricullum_details';


function  Darktowhite  (identity) {
  return( 
     
  <CardWhite/>
     
  ) ;
}




const CurriculumCardDark = ({identity,heading,count,time}) => {
    return (
      <div id='card1' > 
                <button onClick={()=>Darktowhite(identity)}>see more</button>
               
      </div>
      
    );
  }

export default  CurriculumCardDark;
