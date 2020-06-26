import React, { Component } from 'react';
import './cart.css';
import Nav from '../navCartLoggedOut/nav';
import Footer from '../footer/footer'; 
import axios from 'axios';

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
                                <input type="button"  id='remove' value='remove' onClick={()=>deleteItems()}></input>
                              </div>
                        </div>
                      )
                    }
              </div>
              
  </div>
}

 function deleteItems(){
                                 

        const headers = {
            
          "Content-Type": "application/json"
                    }
      const id = { id :123456789};
      axios.post('http://localhost:5000/student_enrollment/cartcarddelete',id,{headers: headers});


}




class cart extends Component{

  constructor(props){
    super(props);
    this.state={
      productionItems:[],
      couponvalue:'',
      discount:1
    }
  }

  componentDidMount(){
    this.getItems();
  }

  couponchange=(event)=>{
    this.setState({couponvalue:event.target.value})
  }

  onCouponvalue =(event)=>{

    const headers ={
      "Content-type":"application/json"
    }

    axios.post('http://localhost:5000/student_enrollment/couponvalue',this.state.couponvalue,{headers: headers}).then(res=>{

    this.setState({value:res.data})  
  })
  }



  getItems =()=>{
      const headers = {
        
          "Content-Type": "application/json"
      }
      const id = { id :1234};
     axios.post('http://localhost:5000/student_enrollment/cartproduction',id,{headers: headers}).then(res => {
        
      const data = res.data;
      this.setState({productionItems:data})
      })

    }
  


  render() {
      const {productionItems} = this.state
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
                                             total={productionItems.reduce((a,c)=>(a+c-(this.state.discount).price ), 0)}/>
                                             <button id="checkout1">Checkout</button>
                                        
                                    </div>
                                    <div>
                                    <input id="cart-input" placeholder='Enter coupon code' onChange={this.couponchange} />
                                        <button id="cart-apply" onClick={()=>this.onCouponvalue()} >Apply</button>
                                    </div>
                        </div>
            </div>
    <Footer/>
    </div>
  );
}
}


export default cart;