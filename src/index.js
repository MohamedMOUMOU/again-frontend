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
import SignUp from "views/examples/SignUp.js";
import LandingPage from "views/examples/LandingPage.js";
import SignUpPage from "views/examples/SignUpPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Dashboard from "views/examples/Dashboard.js";
import Application from "views/examples/Application.js";


ReactDOM.render(

  <BrowserRouter>

    <Switch>

      <Switch>
      <Route path="/loginAssoc" component={LoginPageAssoc} />
      <Route path="/loginHouse" component={LoginPageHouse} />
      <Route path="/loginApp" component={LoginPageApp} />
  	<Route path="/Donate" component={Donate} />
    <Route path="/volunteer" component={Application} />
    <Route path="/Signup" component={SignUp} />
     <Route path="/me" component={Dashboard} />
     <Route path="/" component={LandingPage} />


      </Switch>

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
