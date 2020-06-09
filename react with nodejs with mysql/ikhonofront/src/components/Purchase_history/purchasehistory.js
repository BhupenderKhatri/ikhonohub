import React, { Component } from 'react';
import './purchasehistory.css';
import {purchaseItems} from '../../FinalDetails';
import {refundItems} from '../../FinalDetails';

function Header1(props){
  return <h2 id='purchasehistory-h2'> Purchase History</h2>
}
function Items1(props){
  return    <table id='purchasehistory-table'>
  <thead >
<tr><th id='tableHeader'>Course</th>
<th id='tableHeader'>Date</th>
<th id='tableHeader'>Total Price</th>
{/* <th id='tableHeader'>Payment Type</th> */}
<th id='tableHeader'>Reciepts</th>
</tr>
</thead>
<tbody>
{
  props.productItems.map(items=>
  <tr key={items.course}>
    <td id='tabledata'>{items.course}<br></br><a href=""><u>View Course</u></a></td>
    <td id='tabledata1'>{items.Date}</td>
    <td id='tabledata2'>{items.total_price}</td>
    {/* <td id='tabledata'>{items.payment_type}</td> */}
    <td id='tabledata3'><button id="tabledata4">{items.button}</button></td>

    </tr>
  )
}
</tbody>


  </table>
}
function Header2(props){
    return <h2 id='purchasehistory-h2' > Refund</h2>
  }
  function Items2(props){
    return  <div class="pos5">  <table id='purchasehistory-table'>
    <thead >
  <tr><th id='tableHeader'>Course</th>
  <th id='tableHeader'>Date</th>
  <th id='tableHeader'>Total Price</th>
  {/* <th id='tableHeader'>Payment Type</th> */}
  <th id='tableHeader'>Reciepts</th>
  </tr>
  </thead>
  <tbody>
  {
    props.refundItems.map(items=>
    <tr key={items.course}>
      <td id='tabledata'>{items.course}<br></br><a href=""><u>View Course</u></a></td>
      <td id='tabledata1'>{items.Date}</td>
      <td id='tabledata2'>{items.total_price}</td>
      {/* <td id='tabledata'>{items.payment_type}</td> */}
      <td id='tabledata3'><button id="tabledata4">{items.button}</button></td>
  
      </tr>
    )
  }
  </tbody>
  </table>
  </div>
  }
class Details extends Component{
  render() {

    return(
    <div className="Details1">
     <Header1/>
     <Items1 productItems={purchaseItems}/>
    <Header2/>
    <Items2 refundItems={refundItems}/>
   </div>
  );
}
}


export default Details;