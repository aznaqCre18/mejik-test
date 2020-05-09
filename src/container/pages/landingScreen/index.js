import React, { Component } from "react";

import "./../../../style/LandingScreen/style.scss";
import Header from "./../../../components/molecules/headerTop";
import HeaderBeforeLogin from "./../../../components/molecules/headerTopBeforeLogin";
import MainContainer from "./../../../components/molecules/container";

export default class LandingPage extends Component {
  render() {
    let token = window.localStorage.getItem("token");
    return (
      <>
        {token !== null ? (
          <Header title="Switch To Instructor View" link="/instructor" />
        ) : (
          <HeaderBeforeLogin />
        )}
        <MainContainer />
      </>
    );
  }
}
