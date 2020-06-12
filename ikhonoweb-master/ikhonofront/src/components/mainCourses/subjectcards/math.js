import React, { Component } from "react";
import Card from  '../../course_cards/card';
import {mathematics} from  '../../../FinalDetails';
class math extends Component {
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
        mathematics.map((user,i) => {
          return(
        <Card
        heading={mathematics[i].heading}
        data={mathematics[i].data}
        name={mathematics[i].name}
        />
          );
  })
  }
      </div>
    );
    }
  }
  
  export default math;