import React   from 'react' ;
import './pricing.css' ;

const PricingOnlyOne= ({c6_1,c6_2,c6_3,c6_4,c6_5,c6_6,c6_7,c6_8 ,c6_8a,c6_8b,c6_8c,c6_8d})=>{
    
      return(
<div >
<h1 id="pricing-main-head">Pricing Plans For All</h1>
  <div className="pricing_main">
            <div className="pricing-base">
                <h3 id="pricing-base-title">{c6_1}</h3>
                <p id="prices">{c6_2}</p>
                <hr></hr>
                <div id="pricing-cont">
                    <p>{c6_3}</p>
                    <p>{c6_4}</p>
                    <p>{c6_5}</p>
                    <p>{c6_6}</p>
                    <p>{c6_7}</p>
                    <p>{c6_8}</p>
                    <p>{c6_8a}</p>
                     <p>{c6_8b}</p>
                      <p>{c6_8c}</p>
                       <p>{c6_8d}</p>
                </div>
                <button className="pricing-btn">Registor</button>
            </div>
                                
  </div>  

</div>          

);
}

export default PricingOnlyOne;