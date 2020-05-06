import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./../../../style/HeaderTop/style.scss";
import Logo from "./../../../assets/Logo.svg";
import SearchBar from "./../../atoms/LandingPage/searchBar";
import MyCourse from "./../../atoms/LandingPage/myCourse";
import SwitchButton from "./../../atoms/LandingPage/switchButton";
import Profile from "./../../atoms/LandingPage/profileIcon";

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
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <Row className="course-section">
            <MyCourse />

            <SwitchButton title={this.props.title} link={this.props.link} />

            <Profile />
          </Row>
        </header>
      </>
    );
  }
}
