import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Interncourse from './../components/interncourse/interncourse';
import home from "./../components/home/home";
import signup from "./../components/signup/signup";
import history from '../history';
import login from './../components/login/login';
import forgotpassword from './../components/Forgotpassword/forgotpassword'
import Verification from './../components/Verfication/verification'
import cart from './../components/cart/cart';
import bell from './../components/bell/bell';

import cartLoggedIn from './../components/cartLoggedIn/cartLoggedIn';

import Addprofile from '../components/Account/Profile/addprofile';

import Carddetails from '../components/carddetails/carddetails';
import Dashboard from '../components/dashboard/dashboard';


import Privacy from '../components/PrivacyPolicy/privacy';
import ReactPlayerPage from '../components/CourseVideoPlayer/playermain';


import MyCourses from '../components/dashboard/dashoardMyCourses';
import TrendingCourses from '../components/dashboard/dashboardTrendingCourses';
import PurchaseHistory from '../components/dashboard/dashboardPaymentHistory';
import Account from '../components/dashboard/dashboardAccount';
import Help from '../components/dashboard/dashboardHelp';

import Quiz from './../components/quiz/quiz';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>

                    <Route path="/" exact component={home} />
                    <Route path="/login" component={login} />
                    <Route path="/signup" component={signup} />
                    <Route path="/forgotpassword" component={forgotpassword} />
                    <Route path="/Verification" component={Verification} />
                    <Route path="/cart" component={cart} />
                    <Route path="/bell" component={bell} />
                    
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/carddetails" component={Carddetails} />
                    <Route path="/cartLoggedIn" component={cartLoggedIn} />
                    
                    <Route path="/help" component={Help} />
                    <Route path="/privacy" component={Privacy} />
                    <Route path="/player" component={ReactPlayerPage} />
                    
                    <Route path="/addprofile" component={Addprofile} />
                    <Route path="/interncourse" component={Interncourse}/>
                    
                    <Route path="/mycourses" component={MyCourses} />
                    <Route path="/trending" component={TrendingCourses} />
                    <Route path="/purchasehistory" component={PurchaseHistory} />
                    <Route path="/account" component={Account} />
                    <Route path="/quiz" component={Quiz} />
                </Switch>
            </Router>
        )
    }
}