import React, { Component } from "react";

import MyCourseList from "./../../../components/molecules/myCourseList";
import Header from "./../../../components/molecules/headerTop";

export default class MyCourse extends Component {
  render() {
    return (
      <>
        <Header title="Switch To Instructor View" link="/instructor" />
        <MyCourseList />
      </>
    );
  }
}
