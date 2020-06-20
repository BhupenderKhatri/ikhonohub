import React, { Component } from 'react';
import ComingSoon from './comingsoon.png';
import './card.css';

import history from './../../history';
import axios from 'axios';
 

class card extends Component {

  addItems(props){
                                 

    const headers = {
        
      "Content-Type": "application/json"
                }
  const id = { id :this.props.id};
  axios.post('http://localhost:5000/cartcardadd',id,{headers: headers});
  
  
  }

 render()
   {    
  /*   const{showHideDemo1}=this.state; */
    return (
      <div className='tc bg-light-green br4 pa2 ma2 dib  shadow-5' id='card1'>

          <div >
              <img id='card_img_commingsoon' alt="courseimage" src={ComingSoon}/>
              
          </div>
          <div>
            <h2 id='heading'>{this.props.heading}</h2>
           {/* <p id="card_data">{this.props.data}</p>  */}
            <p className='name'>By : {this.props.name}</p>
            <br/>
          </div>
              
              
              <div className='place'>
           
              <button className='details' onClick={()=>history.push('/carddetails')} >Course Detail</button>
              <button id='preview' onClick={()=>this.addItems()}>Add to Cart</button>


 
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
    
  
  
  export default card;