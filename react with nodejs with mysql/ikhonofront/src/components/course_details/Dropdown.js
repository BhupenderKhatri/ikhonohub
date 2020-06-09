import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import {coursesHeaderDark } from '../../curricullum_details' ;
import WhiteCard from './Random' ;
import ReactPlayer from "react-player";
import './courseslist.css'

function Dropdown({ title, items, multiSelect = false },{urlvalue}) {
 
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);




  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
       
        console.log(item) ;
      
       
        item.map(user =>{
            return(
               console.log(item.heading)
            );
        })
         }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }




  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return  (  
       <div className='bg-blue'>
          
          < WhiteCard 
           id={item.id}
          />
       
 
       </div>
      );
      

    }
    return (
      false
    );
  }






  
  return (
    <div className="dd-wrapper"> 
     
     {
     
          }
      <div
        tabIndex={0}
        
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div id="mainheading">
          <p >{title}</p>
        </div>
        <div>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>




      {open && ( 
       
        <ul className="dd-list">
          {items.map(item => (
            <li key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span >{item.heading}</span>
                <span> {isItemInSelection(item) }</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);