import React, { Component } from "react";
import Card from  '../../course_cards/card';
import {python1} from  '../../../FinalDetails';
class python extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
  
    render() {
      return (
<div style={{display:"inline-block"}}>
        {
        python1.map((user,i) => {
          return(
        <Card
        heading={python1[i].heading}
        data={python1[i].data}
        name={python1[i].name}
        />
          );
  })
  }
      </div>
    );
    }
  }
  
  export default python;