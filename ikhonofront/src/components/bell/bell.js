import React from 'react';
import './bell.css';
import notification from '../nav/notifications.png';

function bell() {
  return (
    <div className="bell">
      <img id='bell_img' src={notification}/>
    <p>No new notification </p>
    </div>
  );
}

export default bell;