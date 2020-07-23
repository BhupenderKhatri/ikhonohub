import React , {Component}  from 'react' ;
import './pricing.css' ;

class Pricing extends Component{
    render(){
      return(
<div className="title-main">
<h1 id="pricing-main-head">Pricing Plans For All</h1>
  <div className="pricing_main">
            <div className="pricing-base">
                <h3 id="pricing-base-title">Basic</h3>
                <p id="prices">₹5000</p>
                <hr></hr>
                <div id="pricing-cont">
                    <p>1 major+1 minor project</p>
                    <p>Github+version control with git</p>
                    <p>firebase</p>
                    <p>course completion certificate</p>
                    <p>Internship certificate after project submission</p>
                </div>
                <button className="pricing-btn">Registor</button>
            </div>


                        <div className="pricing-base">
                            <h3 id="pricing-base-title">Advanced</h3>
                            <p id="prices">₹8000</p>
                            <hr></hr>
                            <div id="pricing-cont">
                                <p>1 major+2 minor project</p>
                                <p>project assistance</p>
                                <p>ithub + collaboration</p>
                                <p>one to one mentorship</p>
                                <p>Technical Interview tips</p>
                                <p>course completion certificate</p>
                                <p>Internship certificate after project submission</p>
                            </div>
                            <button className="pricing-btn">Registor</button>
                        </div>


                                    <div className="pricing-base">
                                        <h3 id="pricing-base-title">Premium</h3>
                                        <p id="prices">₹12000</p>
                                        <hr></hr>
                                        <div id="pricing-cont">
                                            <p>3 major+4 minor project</p>
                                            <p>project assistance</p>
                                            <p>Github + collaboration</p>
                                            <p>one to one mentorship</p>
                                                                                        <p>Internship+placement opportunities(performance based)</p>
                                            <p>career path building</p>
                                            <p>course completion certificate</p>
                                            <p>Internship certificate after project submission</p>
                                        </div>
                                        <button className="pricing-btn">Registor</button>
                                    </div>
  </div>  

</div>          

);
}
}
export default Pricing;