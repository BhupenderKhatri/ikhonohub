import React from 'react';
import './Dropdown.css' ;
import Dropdown from './Dropdown';
import {coursesHeaderDark } from '../../curricullum_details' ;



function App() {
  return (
    <div className="container">
    
      <Dropdown  items={coursesHeaderDark}  />
    </div>
  );
}

export default App;