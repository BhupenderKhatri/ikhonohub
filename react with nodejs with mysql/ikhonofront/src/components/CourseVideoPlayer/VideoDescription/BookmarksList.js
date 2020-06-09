import React from 'react';
import Bookmark from './Bookmark.js';
import {marked} from "./BookmarkDetails" ;

const MyBookmarks = () => {
    return (
      <div >  
           {marked.map((user,i) => {
               return(
                   <Bookmark
                   section={marked[i].section}
                   time={marked[i].time}
                   heading={marked[i].heading}
                   videotopic={marked[i].videotopic}
                   videonbr={marked[i].videonbr}
                   />
               );
           })}         
      </div>
          
        )
        }
            
  
  export default MyBookmarks ;