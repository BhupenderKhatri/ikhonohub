import React,{Component, useReducer} from 'react';
import {coursesHeaderDark } from '../../curricullum_details' ;
import DisplayWhiteCard from './DisplayWhiteOptions' ;

const CardWhite =({id})=> {
    

        return(
                < DisplayWhiteCard 
                content={coursesHeaderDark[id-1].second}
               />
        
        );
       

}
export default CardWhite;