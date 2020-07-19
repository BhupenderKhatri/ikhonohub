import React , {Component}  from 'react' ;
import './pricing.css' ;

class Pricing extends Component{
    render(){
      return(
<div >
<h1 id="pricing-main-head">Pricing Plans For All</h1>
  <div className="pricing_main">
            <div className="pricing-base">
                <h3 id="pricing-base-title">Self Paced</h3>
                <p id="prices">₹7000</p>
                <hr></hr>
                <div id="pricing-cont">
                    <p>Course Completion Certificate</p>
                    <p>1 minor project + 1 major project</p>
                    <p>Internship Certificate from Verzeo on successful project completion</p>
                    <p>8 + hours mentor training</p>
                    <p>Microsoft Gold Partner</p>
                    <p>Cobranded Internship Certificate</p>
                </div>
                <button className="pricing-btn">Registor</button>
            </div>


                        <div className="pricing-base">
                            <h3 id="pricing-base-title">Advanced</h3>
                            <p id="prices">₹13000</p>
                            <hr></hr>
                            <div id="pricing-cont">
                            <p>Course Completion Certificate</p>
                                <p>1 minor project + 1 major project</p>
                                <p>Internship Certificate from Verzeo on successful project completion</p>
                                <p>8 + hours mentor training</p>
                                <p>Microsoft Gold Partner</p>
                                <p>Cobranded Internship Certificate</p>
                            </div>
                            <button className="pricing-btn">Registor</button>
                        </div>


                                    <div className="pricing-base">
                                        <h3 id="pricing-base-title">Mentor Led</h3>
                                        <p id="prices">₹10000</p>
                                        <hr></hr>
                                        <div id="pricing-cont">
                                        <p>Course Completion Certificate</p>
                                            <p>1 minor project + 1 major project</p>
                                            <p>Internship Certificate from Verzeo on successful project completion</p>
                                            <p>8 + hours mentor training</p>
                                            <p>Microsoft Gold Partner</p>
                                            <p>Cobranded Internship Certificate</p>
                                        </div>
                                        <button className="pricing-btn">Registor</button>
                                    </div>
  </div>  

</div>          

);
}
}
export default Pricing;