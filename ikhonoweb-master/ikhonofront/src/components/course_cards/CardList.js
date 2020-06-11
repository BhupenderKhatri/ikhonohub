import React from 'react';
import Card from './card';
import { pop } from '../../FinalDetails';


const CardList = () => {
  return (
    <div style={{display:"inline-block"}}>
      {
      pop.map((user,i) => {
        return(
      <Card
      heading={pop[i].heading}
      data={pop[i].data}
      name={pop[i].name}
      url={pop[i].url}
      />
        );
})
}
    </div>
  );
}

export default CardList;