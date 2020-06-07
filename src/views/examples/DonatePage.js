import React from "react";
import { Link } from "react-router-dom";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

import {Redirect} from "react-router";
// core componentsct from reac
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

var objLogin = { "email" : "", "password": ""};

function LoginPageApp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [toDash, setToDash] = React.useState(false);



  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });




const handleInputChange = (event )=>{

  objLogin[event.target.name] = event.target.value;
}

function onSubmito(event){

    console.log("the obj ==>",objLogin);
    event.preventDefault();
    fetch('http://localhost:4000/user/login', {
      method: 'POST',
      body: JSON.stringify({email:objLogin.email,password: objLogin.password}),
      headers: {
        'Content-Type': 'application/json'
      }

    })
    .then(res => {
      if (res.status === 200) {
       console.log(res);
       setToDash(true);
      } else {
        alert("por favor, debes que trabajar: ");
        alert(res.status);

        const error = new Error(res.error);
        console.log(error);
        throw error;

      }
    }) .then(data => {
      if (data.message) {
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);

      }
    })
    .catch(err => {
      console.error(err);
      console.log(objLogin);
      alert('Error logging in please try again');
    });
  }

  return (
    <>
    {toDash ? <Redirect to = "/me" /> : null}
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/donate.png") + ")"
          }}
        ></div>
        <div className="content" style={ { marginBottom: -100 } }>
          <Container>
            <Col className="m-auto" md="7">
              <p className="text-center" style={ { paddingTop:80,fontWeight: 'bold',fontSize: 50 } }><span style={ { color: '#ff6c31' } }>Donate</span> Money</p>
              <p>Donating money keep our services alive. By donating we can pay our applications' reviewers and provide many jobs.<br/>Donate money and help people from around the world.</p>
              <Button
                style={ { backgroundColor: '#ff6c31' } }
                className="btn-round"
                color="success"
                type="submit"
                value="Submit"
                size="lg"
                to="/"
                tag={Link}
              >
                Donate
              </Button>
            </Col>
          </Container>
        </div>

      </div>
    </>
  );
}

export default LoginPageApp;
