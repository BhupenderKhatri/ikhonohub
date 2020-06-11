import React, { Component } from 'react';

import French from './../subjectcards/french';
import Math from './../subjectcards/math';
import Python from './../subjectcards/python';
import Webdev from './../subjectcards/webdev';

import './subjects.css';
import history from '../../../history';


class subjects extends Component {

    constructor(){

        super();
        this.state={
            name :"React",
            showHideDemo1:false,
            showHideDemo2:false,
            showHideDemo3:false,
            showHideDemo4:true
        };
        this.hideComponent=this.hideComponent.bind(this);
    }

    hideComponent(name){
       
        console.log(name); 
        switch(name){
            case "showHideDemo1":            
                this.setState({showHideDemo1: true }  );   
                this.setState({showHideDemo2: false }  );
                this.setState({showHideDemo3: false }  );
                this.setState({showHideDemo4: false }  );
                break;
            case "showHideDemo2":
                this.setState({showHideDemo1: false }  );   
                this.setState({showHideDemo2: true }  );
                this.setState({showHideDemo3: false }  );
                this.setState({showHideDemo4: false }  );
                break;
            case "showHideDemo3":
                this.setState({showHideDemo1: false }  );   
                this.setState({showHideDemo2: false }  );
                this.setState({showHideDemo3: true }  );
                this.setState({showHideDemo4: false }  );
                break;
            case "showHideDemo4":
                this.setState({showHideDemo1: false }  );   
                this.setState({showHideDemo2: false }  );
                this.setState({showHideDemo3: false }  );
                this.setState({showHideDemo4: true }  );
                break;
           default:
               ;
        }
    
    }

    render(){
        const {showHideDemo1,showHideDemo2,showHideDemo3,showHideDemo4}=this.state;
        return (
            <div className="sub_bar">  
                <div>
                <p id="coursetitle">Courses</p>
               </div>
                <div className="restcomp">
                      <ul className="sublst">
                            <li onClick={() => this.hideComponent("showHideDemo4")}>web development</li>
                            <li onClick={() => this.hideComponent("showHideDemo3")}>python</li>
                            <li onClick={() => this.hideComponent("showHideDemo2")}>mathematics</li>
                            <li onClick={() => this.hideComponent("showHideDemo1")}>french</li>
                            <li>
                        <button type="button" className="see_more" onClick={() => history.push("/AllCoursesLoggedOut")}>See More</button></li>
                    </ul>
                </div>


                            <div>

                                {showHideDemo1 && <French/>}
                            
                                {showHideDemo2 && <Math />}
                               
                                {showHideDemo3 && <Python />}
                             
                                {showHideDemo4 && <Webdev />}
                                
                            </div>

         </div>
          );
     }
    }

export default subjects;