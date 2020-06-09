import React from 'react' ;
import BarContent from './BarContent';
import {description} from './info' ;

const despass = () =>{
    return( 
        <div style={{display: "inline-block"}}>
               {
                   description.map((user,i)=> {
                       return( 
                         <BarContent
                          theory={description[i].theory}
                          skilllevel={description[i].skilllevel}
                          noofstudents={description[i].noofstudents}
                          language={description[i].language}
                          captions={description[i].captions}
                          lecture={description[i].lecture}
                          videos={description[i].videos}
                          certificates={description[i].certificates}
                          describing={description[i].describing}
                          
                         /> 


                       );
                   })
               }
        </div>
    );
}
export default despass ;