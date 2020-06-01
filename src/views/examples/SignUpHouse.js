import React from "react";

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

var objLogin = {"fname" : "","lname" : "","phoneNum" : "", "identityNum" : "", "email" : "", "password": ""};

function SignUpHouse() {
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
    fetch('https://againbackend.herokuapp.com/user/signupowner', {
      method: 'POST',
      body: JSON.stringify({fname:objLogin.fname, lname:objLogin.lname,
    phoneNum:objLogin.phoneNum,
        identityNum:objLogin.identityNum,email:objLogin.email,
        password: objLogin.password}),
      headers: {
        'Content-Type': 'application/json'
      }

    })
    .then(res => {
      if (res.status === 200) {

       setToDash(true);
      } else {
        alert("por favor, debes que trabajar: ");
        const error = new Error(res.error);
        console.log(error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      console.log(objLogin);
    });
  }

  return (
    <>
    {toDash ? <Redirect to = "/LoginHouse" /> : null}
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/signup.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
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
                  <p className="text-center" style={ { margin: -10,fontWeight: 'bold',fontSize: 30 } }>Rgister as a <span style={ { color: '#ff6c31' } }>house donater</span></p>
                  <CardBody>
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

                        placeholder="First Name"
                        name="fname"
                        label="fname"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
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

                        placeholder="Last Name"
                        name="lname"
                        label="lname"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                          onChange={handleInputChange}

                      ></Input>
                    </InputGroup>
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
                      placeholder="Email"
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
                      placeholder="Password"
                      name="password"
                      label="Password"

                      type="password"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                      name = "password"

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

                        placeholder="Phone Number"
                        name="phoneNum"
                        label="phoneNum"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
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

                        placeholder="CIN Number"
                        name="identityNum"
                        label="identityNum"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                          onChange={handleInputChange}

                      ></Input>
                    </InputGroup>
                    <Button
                      style={ { backgroundColor: '#ff6c31' } }
                      className="btn-round"
                      color="success"
                      type="submit"
                      value="Submit"
                      size="lg"
                    >
                      Signup
                    </Button>
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>

      </div>
    </>
  );
}

export default SignUpHouse;
