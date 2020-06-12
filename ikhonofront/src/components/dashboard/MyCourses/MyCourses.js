import React, { Component }  from 'react' ;
import'./MyCourses.css' ; 
import ComingSoon from './comingsoon.png';
import history from './../../../history';

class MyCoursedetails extends Component {
    render(){
    return (
        <div className='tc bg-light-gray br3 pa3 ma2 dib bw2 shadow-5' id='card'>
  
            <div id='img_commingsoon'>
                <img alt="courseimage" src={ComingSoon}/>
                <hr/>
            </div>
            <div>
              <h2 id='heading'>{this.props.heading}</h2>
              <p id="card_data">{this.props.data}</p>
              <p className='name'>Name : {this.props.name}</p>
              <br/>
            </div>
                
                
                <div className='place'>
             
                <button className='details' onClick={()=>history.push('/carddetails')} >Course Detail</button>
                <button id='preview' >Start Course</button>
  
  
   
              </div>
  {/*
            <div>
            {  showHideDemo1 &&<ReactPlayer url={this.props.url} playing="True" 
                  width="540px" height="540px" light="true"  controls="true" wrapper="div" />
                
                }
            </div>
              */}
  
              </div>
  
        );

}
}


export default MyCoursedetails ;