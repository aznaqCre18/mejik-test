import React, { Component } from "react";

import "./../../../style/LandingScreen/style.scss";
import Header from "./../../../components/molecules/headerTop";
import MainContainer from "./../../../components/molecules/container";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header title="Switch To Instructor View" link="/instructor" />
        <MainContainer />
      </>
    );
  }
}
