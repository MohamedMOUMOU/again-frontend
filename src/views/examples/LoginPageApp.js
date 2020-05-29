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
            backgroundImage: "url(" + require("assets/img/login.png") + ")"
          }}
        ></div>
        <div className="content" style={ { marginBottom: -100 } }>
          <Container>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="" onSubmit = {onSubmito}>
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <p className="text-center" style={ { fontWeight: 'bold',fontSize: 30 } }><span style={ { color: '#ff6c31' } }>Applications reviewers</span> space</p>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Application reviewer E-mail..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        name = "email"
                        //value={objLogin.email}
                        onChange={handleInputChange}

                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password..."
                        name="password"
                        label="Password"

                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
			                  name = "password"
			//value={objLogin.password}
          		onChange={handleInputChange}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                  <div className="pull-left">
                    <h6>
                      <a
                        className="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        if you want to apply for the job of an application reviewer
                      </a>
                    </h6>
                  </div>
                    <Button
                      style={ { backgroundColor: '#ff6c31' } }
                      className="btn-round"
                      color="success"
                      type="submit"
                      value="Submit"
                      size="lg"
                      to="/signup"
                      tag={Link}
                    >
                      Apply
                    </Button>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#LOLO"
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>

      </div>
    </>
  );
}

export default LoginPageApp;
