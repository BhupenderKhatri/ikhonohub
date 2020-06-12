import React,{Component} from 'react';
import './curriculumnCardWhite.css';
const curriculumCardWhite = ({heading,count,time}) => {
    return (
      <div id='card2'>
            {heading}
            {count}
            {time}
      </div>
      
    );
  }
export default curriculumCardWhite;