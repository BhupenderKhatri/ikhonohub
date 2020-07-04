import React, { Component } from 'react';
import './purchasehistory.css';

import axios from 'axios';



function Items1(props){
  return    <table id='purchasehistory-table'>
  <thead >
    <tr class="puechase_History_head" ><td>Purchase History</td>
    <hr class="puechase_History_head_line"></hr></tr>
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

    <td id='tabledata'>{items.course}<br></br><a href="" id="purchase_history_view">View Course</a> </td>
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

class Details extends Component{
  constructor(props){
    super(props);
    this.state={
      purchase:[]
    }

  }

  componentDidMount(){
    this.getItems();
  }

  getItems=()=>{

    const headers ={
        "Content-Type":"application/json"
    }

    const id = { id :1234}
    axios.post('http://localhost:5000/purchase_history/purchasehistory',id,{headers: headers}).then(res=>{
      const data =res.data;
      this.setState({ purchase : data})
    })




  }
  render() {

    return(
    <div className="Details1">
     <Items1 productItems={this.state.purchase}/>
  
   </div>
  );
}
}


export default Details;