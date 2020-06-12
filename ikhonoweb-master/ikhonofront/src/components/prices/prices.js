import React ,{Component} from 'react' ;
import ReactPlayer from "react-player";
import './prices.css' ;

const Rate = ({para1,para2,para3,para4,para5,discount,priceofcontent,videourl}) => {
    return(
       
           

           <div id="priceing" >
           <div>
             <ReactPlayer id="player" width="100%"  controls height="300px" url={videourl}/>
           </div>
            <h3 id="fontstylinghead">This Course Include</h3>
            <ul> 
                <li class="fontstylinglist">{para1}</li>
                <li class="fontstylinglist">{para2}</li> 
                <li class="fontstylinglist">{para3}</li>
                <li class="fontstylinglist">{para4}</li>
                <li class="fontstylinglist">{para5}</li>
            </ul>

            <table id ="discounts">
                <td id="rate">
                    <tr>
                    {priceofcontent}
                    </tr>                   
                </td>
                <td id= "percentage">
                    <tr>
                        {discount}
                    </tr>
                </td>
            </table>
            <div id='buttons'>
            <button id="buttonAddCart">Add to Cart</button>
            <button id="buttonbuy">BUY NOW</button>
            </div>

            
            <h4 id="lastline">Join 100,000+ other students already enrolled!</h4>
           
        </div>

       
  
        
    );

}

export default Rate