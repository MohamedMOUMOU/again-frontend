import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="primary" expand="lg">
        <Container>
          <div className="navbar-translate" style={{ fontSize: 25 }}>
            <img height="25" width="35" className="m-2" src={require("assets/img/logo.png")}/>
            <NavbarBrand
              href={require("index")}
              target="_blank"
              id="navbar-brand"
            >
              Again
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Everything can be great again
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem id="navbar-link-1">
                <NavLink to="/LoginAssoc" tag={Link}>
                  Associations
                </NavLink>
              </NavItem>
              <UncontrolledTooltip target="#navbar-link-1">
              If you are an association, please log in to your account.
            </UncontrolledTooltip>
              <NavItem id="navbar-link-2">
                <NavLink to="/LoginHouse" tag={Link}>
                  House holders
                </NavLink>
              </NavItem>
              <UncontrolledTooltip target="#navbar-link-2">
              If you want to donate a house, please log in to your account.
            </UncontrolledTooltip>
              <NavItem id="navbar-link-3">
                <NavLink to="/LoginApp" tag={Link}>
                  Applications reviewers
                </NavLink>
              </NavItem>
              <UncontrolledTooltip target="#navbar-link-3">
              log in to the dashboard of an app reviewer.
            </UncontrolledTooltip>
              <NavItem>
                <NavLink to="/Donate" tag={Link}>
                  Donate money
                </NavLink>
              </NavItem>
              <NavItem id="navbar-link-4">
                <NavLink to="/Signup" tag={Link}>
                  Sign Up
                </NavLink>
              </NavItem>
              <UncontrolledTooltip target="#navbar-link-4">
              if you are an association, want to donate a house or to apply for the job of an app reviewer, feel free to create an account.
            </UncontrolledTooltip>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
