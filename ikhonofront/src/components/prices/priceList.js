import React,{Component} from 'react';
import Prices from './prices';
import axios from 'axios';


class PriceList extends Component {

  constructor(props){
    super(props);
    this.state={
      priceofcourse:[]
    }
  }

  componentDidMount(){
    this.getItems();
  }


  getItems =()=>{
    const headers = {
      
        "Content-Type": "application/json"
    }
    const id = { id :1234};
   
    axios.post('http://localhost:5000/cardinfodetail/priceofcourse',id,{headers: headers}).then(res => {
          
        const data = res.data;
        this.setState({priceofcourse:data})
        })
                    
   }


  render(){

    const { priceofcourse}=this.state;

  return (
    <div style={{display: "inline-block"}}>
        {

        
          priceofcourse.map((user,i) =>  {
          
          return(
 
            <Prices
            para1={priceofcourse[i].para1}
            para2={priceofcourse[i].para2}
            para3={priceofcourse[i].para3}
            para4={priceofcourse[i].para4}
            para5={priceofcourse[i].para5}
            discount={priceofcourse[i].discount}
            priceofcontent={priceofcourse[i].priceofcontent}
            videourl={priceofcourse[i].videourl}
            />
            
          
            );
          
        })
        
      }
    
        
    </div>
    
  );
}
}
export default PriceList;