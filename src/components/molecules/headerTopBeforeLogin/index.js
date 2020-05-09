import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./../../../style/HeaderTop/style.scss";
import Logo from "./../../../assets/Logo.svg";
import Vector from "./../../../assets/img/category.png";
import SearchBar from "./../../atoms/LandingPage/searchBar";
import Login from "./../../atoms/LandingPage/loginButtonHead";
import Register from "./../../atoms/LandingPage/registerButtonHead";

export default class headerTop extends Component {
  render() {
    return (
      <>
        <header className="header">
          <Row>
            <Col md={2}>
              <Link to="/">
                <img src={Logo} className="app-logo " alt="logo" />
              </Link>
            </Col>
            <Col md={2} className="category">
              <img src={Vector} alt="category" />
              <div className="category-title">Category</div>
            </Col>
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <Row className="course-section">
            <Login />
            <Register />
          </Row>
        </header>
      </>
    );
  }
}
