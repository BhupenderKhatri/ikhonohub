import React, { useState } from 'react'
import './cart.css';
import { productionItems } from '../../FinalDetails';
import Nav from '../dashboardnav/dashboardnav';
import Footer from '../footer/footer';
import ih from './ih.png';



function Header(props) {
  return <h2 class="shoping1"> Shopping Cart</h2>
}
function Price(props) {
  return <h2> Rs. {props.total}</h2>
}
function Items(props) {
  return <div id='cart'>
    <div >
      {
        props.productItems.map(items =>
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


//Razorpay coding starts from here
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const __DEV__ = document.domain === 'localhost'




function CartLoggedIn() {
  const [name, setName] = useState('Mehul')

  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const data = await fetch('http://localhost:5000/razor_pay/razorpay', { method: 'POST' }).then((t) =>
      t.json()
    )

    console.log(data)

    const options = {
      key: __DEV__ ? 'rzp_test_WUnv0wZtxJ2aP6' : 'PRODUCTION_KEY',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Donation',
      description: 'Thank you for nothing. Please give us some money',
      image: 'http://localhost:5000/razor_pay/ih',
      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name,
        email: 'sdfdsjfh2@ndsfdf.com',
        phone_number: '9899999999'
      }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="cart1">
        <Header />
        <div id='cart2'>
          <Items productItems={productionItems} />
          <div class='right'>

            <Price
              total={productionItems.reduce((a, c) => (a + c.price), 0)} />
            <button id="checkout1" onClick={displayRazorpay}
              target="_blank"
              rel="noopener noreferrer">Checkout
                                          </button>

          </div>
          <div>
            <input id="cart-input" placeholder='Enter coupon code' />
            <button id="cart-apply">Apply</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default CartLoggedIn;