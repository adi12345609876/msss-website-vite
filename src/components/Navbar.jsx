import React, { useState, useRef, forwardRef } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Gallerypage from "../pages/Gallerypage";
import NavbarStyles from "../styles/modules/Navbar.module.scss";
import schoollogo from "../assets/img/logo.png";
// import { news, aboutus, mission } from "../components/Globalcomp";

// import "../styles/css/Navbar.css";
function AppNavbar({}, ref) {
  const Navdata = useLocation();

  const ScrollToSelection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [extraNav, setextraNav] = useState(false);
  const onToggle = () => {
    console.log("TOGGELED NAV BAR");
    setextraNav(!extraNav);
  };
  return (
    <>
      {/* use navigation props to send the ref to the file */}
      <Navbar
        className={`${NavbarStyles.navbar} `}
        expand="md"
        onToggle={onToggle}
      >
        <Container className={NavbarStyles.navbarcontainer}>
          <Navbar.Brand className={NavbarStyles.logo} href="/">
            <Image src={schoollogo} alt="Modern school" />
          </Navbar.Brand>
          <Navbar.Toggle
            className={NavbarStyles.toggler}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-column">
            <Nav className={`${NavbarStyles.nav} `}>
              <Link to="/" className={NavbarStyles.link}>
                Home
              </Link>
              <Link to="/Gallery" className={NavbarStyles.link}>
                Gallery
              </Link>
              <Link
                to="https://cubonline.biz/StudentLogin?Instname=MSSS"
                className={NavbarStyles.link}
                reloadDocument
              >
                Payments
              </Link>
              <Link to="/Admissions" className={NavbarStyles.link}>
                Admission
              </Link>
              <Link to="/Contact" className={NavbarStyles.link}>
                Contact us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {Navdata.pathname == "/" && (
          <div className={NavbarStyles.extraNavContainer}>
            <Nav
              className={`${NavbarStyles.extraNav} ${
                extraNav && NavbarStyles.extraNavToggled
              }`}
            >
              <Link
                to="/"
                className={`${NavbarStyles.linkSub}`}
                onClick={() => ScrollToSelection(ref[0])}
              >
                News
              </Link>
              <Link
                to="/"
                className={`${NavbarStyles.linkSub}`}
                onClick={() => ScrollToSelection(ref[1])}
              >
                About us
              </Link>
              {/* The 2ns section */}
              <Link
                to="/"
                className={`${NavbarStyles.linkSub}`}
                onClick={() => ScrollToSelection(ref[1])}
              >
                Infrasture
              </Link>
            </Nav>
          </div>
        )}
      </Navbar>
    </>
  );
}

export default forwardRef(AppNavbar);
