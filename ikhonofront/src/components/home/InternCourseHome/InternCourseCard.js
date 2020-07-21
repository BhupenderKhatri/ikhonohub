import React from 'react';
import './InternCourseCard.css';


const Card = ({ 
      id,
      heading,
      imagesrc
}) => {
    return (
     <div id="internhomebasebackground">

    
        <div id="interncardbase" >
          <img id="image_intern_home" alt='img' src={imagesrc} />
          <p id="intern_home_heading">{heading}</p>
          <button id="internHome_button">Learn More</button>
        </div>
    </div>
    );
  }
 
export default Card;