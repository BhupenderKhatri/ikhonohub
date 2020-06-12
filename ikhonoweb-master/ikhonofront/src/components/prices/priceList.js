import React from 'react';
import Prices from './prices';
import {priceofcourse} from '../../FinalDetails';


const PriceList = () => {
  return (
    <div style={{display: "inline-block"}}>
        {

        
          priceofcourse.map((user,i) =>  {
          
          return(
 
            <Prices
            para1={priceofcourse[i].para1}
            para2={priceofcourse[i].para2}
            para3={priceofcourse[i].para3}
            para4={priceofcourse[i].para4}
            para5={priceofcourse[i].para5}
            discount={priceofcourse[i].discount}
            priceofcontent={priceofcourse[i].priceofcontent}
            videourl={priceofcourse[i].videourl}
            />
            
          
            );
          
        })
        
      }
    
        
    </div>
    
  );
}

export default PriceList;