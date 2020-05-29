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

function SignUp() {
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.png") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="m-auto" md="12">
              <p className="text-center" style={ { paddingTop:80,fontWeight: 'bold',fontSize: 50 } }><span style={ { color: '#ff6c31' } }>Register</span> as</p>
              <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-3">
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
                    Association
                  </Button>
                  </div>
                  <div className="col-md-3">
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
                    House donater
                  </Button>
                  </div>
                  <div className="col-md-3">
                  <Button
                    style={ { backgroundColor: '#ff6c31' } }
                    className="btn-round"
                    color="success"
                    type="submit"
                    value="Submit"
                    size="lg"
                  >
                    Application reviewer
                  </Button>
                  </div>
                  </div>
              </div>
            </Col>
          </Container>
        </div>

      </div>
    </>
  );
}

export default SignUp;
