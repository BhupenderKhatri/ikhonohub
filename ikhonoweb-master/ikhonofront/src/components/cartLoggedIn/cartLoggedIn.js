import React, { Component } from 'react';
import './cart.css';
import {productionItems} from '../../FinalDetails';
import Nav from '../dashboardnav/dashboardnav';
import Footer from '../footer/footer';


function Header(props){
  return <h2 class="shoping1"> Shopping Cart</h2>
}
function Price(props){
  return <h2> Rs. {props.total}</h2>
}
function Items(props){
  return  <div id='cart'>
            <div >
                    {
                      props.productItems.map(items=>
                      <div class='singleCourse' key={items.name}>
                              <div id='coursename'>
                                        {items.course}
                                  </div>
                                  <div id='creatorname'>
                                      By - {items.name}
                                  </div>
                                      <div id='courseprice'>
                                          Price - {items.price} RS
                                      </div>
                              <div >
                                <button id='remove'>Remove</button>
                              </div>
                        </div>
                      )
                    }
              </div>
  </div>
}
class cartLoggedIn extends Component{
  render() {

    return(
    <div>
        <div>
            <Nav/>
        </div>
            <div className="cart1">
            <Header/>
                        <div id='cart2'>
                        <Items productItems={productionItems}/>
                                    <div class='right'>
                                     
                                        <Price 
                                          total={productionItems.reduce((a,c)=>(a+c.price), 0)}/>
                                        <button id="checkout1">Checkout</button>
                                        
                                    </div>
                                    <div>
                                    <input id="cart-input" placeholder='Enter coupon code'/>
                                        <button id="cart-apply">Apply</button>
                                    </div>
                        </div>
            </div>
    <Footer/>
    </div>
  );
}
}

export default cartLoggedIn;