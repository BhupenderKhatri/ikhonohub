import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import home from "./../components/home/home";
import signup from "./../components/signup/signup";
import history from '../history';
import login from './../components/login/login';
import cart from './../components/cart/cart';
import bell from './../components/bell/bell';

import cartLoggedIn from './../components/cartLoggedIn/cartLoggedIn';

import Carddetails from '../components/carddetails/carddetails';
import Dashboard from '../components/dashboard/dashboard';
import AllCoursesLoggedIn from '../components/AllCourses/AllCoursesLoggedIn';
import AllCoursesLoggedOut from '../components/AllCourses/AllCoursesLoggedOut';
import Accountboard from '../components/Accountboard/Accountboard';
import Help from '../components/Help/help';
import Privacy from '../components/PrivacyPolicy/privacy';
import Verification from '../components/Verfication/verification';



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>

                    <Route path="/" exact component={home} />
                    <Route path="/login" component={login} />
                    <Route path="/signup" component={signup} />
                    <Route path="/cart" component={cart} />
                    <Route path="/bell" component={bell} />
                    <Route path="/AllCoursesLoggedIn" component={AllCoursesLoggedIn} />
                    <Route path="/AllCoursesLoggedOut" component={AllCoursesLoggedOut} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/carddetails" component={Carddetails} />
                    <Route path="/cartLoggedIn" component={cartLoggedIn} />
                    <Route path="/accountboard" component={Accountboard} />
                    <Route path="/help" component={Help} />
                    <Route path="/privacy" component={Privacy} />
                    <Route path="/verification" component={Verification} />


                </Switch>
            </Router>
        )
    }
}