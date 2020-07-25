import React , {Component}  from 'react' ;
import './pricing.css' ;

const Pricing = ({c6_1,c6_2,c6_3,c6_4,c6_5,c6_6,c6_7,c6_8 ,c6_8a,c6_8b,c6_8c,c6_8d,c6_9,c6_10,c6_11,c6_12,c6_13,c6_14,c6_15,c6_16,c6_16a,c6_17,c6_18,c6_19,c6_20,c6_21,c6_22,c6_23,c6_24,c6_25,c6_26,c6_27,c6_28})=>{
    
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
                <button className="pricing-btn">Register</button>
            </div>


                        <div className="pricing-base">
                            <h3 id="pricing-base-title">{c6_9}</h3>
                            <p id="prices">{c6_10}</p>
                            <hr></hr>
                            <div id="pricing-cont">
                                <p>{c6_11}</p>
                                <p>{c6_12}</p>
                                <p>{c6_13}</p>
                                <p>{c6_14}</p>
                                <p>{c6_15}</p>
                                <p>{c6_16}</p>
                                <p>{c6_16a}</p>
                            </div>
                            <button className="pricing-btn">Register</button>
                        </div>


                                    <div className="pricing-base">
                                        <h3 id="pricing-base-title">{c6_17}</h3>
                                        <p id="prices">{c6_18}</p>
                                        <hr></hr>
                                        <div id="pricing-cont">
                                        <p>{c6_19}</p>
                                            <p>{c6_20}</p>
                                            <p>{c6_21}</p>
                                            <p>{c6_22}</p>
                                            <p>{c6_23}</p>
                                            <p>{c6_24}</p>
                                            <p>{c6_25}</p>
                                            <p>{c6_26}</p>
                                            <p>{c6_27}</p>
                                            <p>{c6_28}</p>
                                        </div>
                                        <button className="pricing-btn">Register</button>
                                    </div>
  </div>  

</div>          

);
}

export default Pricing;