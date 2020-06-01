/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPageAssoc from "views/examples/LoginPageAssoc.js";
import LoginPageHouse from "views/examples/LoginPageHouse.js";
import LoginPageApp from "views/examples/LoginPageApp.js";
import Donate from "views/examples/DonatePage.js";
import WaitApp from "views/examples/WaitApp.js";
import WaitConf from "views/examples/WaitConf.js";
import SignUp from "views/examples/SignUp.js";
import SignUpHouse from "views/examples/SignUpHouse.js";
import SignUpAssoc from "views/examples/SignUpAssoc.js";
import SignUpApp from "views/examples/SignUpApp.js";
import LandingPage from "views/examples/LandingPage.js";
import AssocApp from "views/examples/AssocApp.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Dashboardd from "views/examples/Dashboardd.js";
import Dashboard from "views/examples/Dashboard.js";
import Me2 from "views/examples/me2.js";
import Application from "views/examples/Application.js";


ReactDOM.render(

  <BrowserRouter>

    <Switch>

      <Switch>
      <Route path="/loginAssoc" component={LoginPageAssoc} />
      <Route path="/loginHouse" component={LoginPageHouse} />
      <Route path="/loginApp" component={LoginPageApp} />
      <Route path="/Signuphouse" component={SignUpHouse} />
      <Route path="/Signupassoc" component={SignUpAssoc} />
      <Route path="/Signupapp" component={SignUpApp} />
      <Route path="/Assocapp" component={AssocApp} />
      <Route path="/Donate" component={Donate} />
      <Route path="/WaitApp" component={WaitApp} />
  	<Route path="/Waitconf" component={WaitConf} />
    <Route path="/volunteer" component={Application} />
    <Route path="/Signup" component={SignUp} />
    <Route path="/Dashboard" component={Dashboardd} />
    <Route path="/me" component={Dashboard} />
     <Route path="/me2" component={Me2} />
     <Route path="/" component={LandingPage} />


      </Switch>

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
