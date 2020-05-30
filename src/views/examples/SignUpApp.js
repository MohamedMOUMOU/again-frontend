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

var objLogin = {"fname" : "","lname" : "","stuId" : "","phoneNum" : "", "cinNum" : "", "email" : "", "password": ""};

function SignUpAssoc() {
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
    fetch('http://localhost:4000/user/signup', {
      method: 'POST',
      body: JSON.stringify({fname:objLogin.fname, lname:objLogin.lname,
        stuId:objLogin.stuId, phoneNum:objLogin.phoneNum,
        cinNum:objLogin.cinNum,email:objLogin.email,
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
        alert(res.status);
        const error = new Error(res.error);
        console.log(error);
        throw error;
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
    {toDash ? <Redirect to = "/index" /> : null}
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
                  <p className="text-center" style={ { margin: -10,fontWeight: 'bold',fontSize: 30 } }>Rgister as an <span style={ { color: '#ff6c31' } }>Assocation</span></p>
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

                        placeholder="First name"
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
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last name"
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
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input

                        placeholder="E-mail"
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
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="proof of not having a job"
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
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Proof of no other income"
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
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="CV"
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
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone number"
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
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                      name = "email"
                      //value={objLogin.email}
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

export default SignUpAssoc;
