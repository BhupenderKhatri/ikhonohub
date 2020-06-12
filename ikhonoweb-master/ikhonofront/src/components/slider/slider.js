import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slider.css';
 
import slider1 from './slider1.png';
import slider2 from './slider2.png';
import slider3 from './slider3.png';

const properties = {
  duration: 4000,
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slider1})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slider2})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slider3})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;