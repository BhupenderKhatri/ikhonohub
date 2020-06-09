import React, { Component } from "react";
import Card from  '../../course_cards/card';
import {webDev} from  '../../../FinalDetails';
class webdev extends Component {
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
        webDev.map((user,i) => {
          return(
        <Card
        heading={webDev[i].heading}
        data={webDev[i].data}
        name={webDev[i].name}
        />
          );
  })
  }
      </div>

      );
    }
  }
  
  export default webdev;