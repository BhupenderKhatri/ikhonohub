import React,{Component} from 'react';
import './curriculumnCardDark.css';
const curriculumCardDark = ({heading,count,time}) => {
    return (
      <div id='card1' >
            {heading} {count} {time} 
            <button >see more</button>
      </div>
      
    );
  }
export default curriculumCardDark;