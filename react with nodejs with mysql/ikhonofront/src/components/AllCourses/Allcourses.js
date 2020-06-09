import React,{Component} from 'react';
import Card from './../course_cards/card';
import {webDev} from '../../FinalDetails';
import {mathematics} from '../../FinalDetails';
import {python1} from '../../FinalDetails';
import {french1} from '../../FinalDetails';


class Courses extends Component {

    render(){
      
      return (
      <div >
  
             <div >
                    <div> 
                      <h1 className="color white tc ">Web development</h1>
                    </div>         
            
             {
            
                
            webDev.map((user,i) =>  {
            
            return(
              
              <Card
              heading={webDev[i].heading}
              data={webDev[i].data}
              name={webDev[i].name}
              url={webDev[i].url}
              />
              
            
              );
            
          })
          
        }
             </div>
  
  
             <div >
                    <div> 
                      <h1 className="color white tc">Python</h1>
                    </div>         
            
             {
            
                
            python1.map((user,i) =>  {
            
            return(
              
              <Card
              heading={python1[i].heading}
              data={python1[i].data}
              name={python1[i].name}
              url={python1[i].url}
              
              />
              
            
              );
            
          })
          
        }
             </div>
  
  
             <div >
                    <div> 
                      <h1 className="color white tc">Mathematics</h1>
                    </div>         
            
             {
            
                
            mathematics.map((user,i) =>  {
            
            return(
              
              <Card
              heading={ mathematics[i].heading}
              data={ mathematics[i].data}
              name={ mathematics[i].name}
              url={mathematics[i].url}
              />
              
            
              );
            
          })
          
        }
             </div>
  
  
             
             <div >
                    <div> 
                      <h1 className="color white tc">French</h1>
                    </div>         
            
             {
            
                
            french1.map((user,i) =>  {
            
            return(
              
              <Card
              heading={french1[i].heading}
              data={french1[i].data}
              name={french1[i].name}
              url={french1[i].url}
              
              />
              
            
              );
            
          })
          
        }
             </div>
  
          
             <div>{this.props.children}</div> 
      </div>
      
  
      
      
    );
      }
  }
  
  export default Courses;