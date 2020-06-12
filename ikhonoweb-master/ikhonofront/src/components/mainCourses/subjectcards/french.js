import React, { Component } from "react";
import Card from  '../../course_cards/card';
import {french1} from  '../../../FinalDetails';
class french extends Component {
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
        french1.map((user,i) => {
          return(
        <Card
        heading={french1[i].heading}
        data={french1[i].data}
        name={french1[i].name}
        />
          );
  })
  }
      </div>
    );
    }
  }
  
  export default french;