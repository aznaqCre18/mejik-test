import React, { Component } from "react";

import "./../../../style/Instructor/style.scss";
import InstructorCourse from "./../../../components/molecules/InstructorCourse";
import Header from "./../../../components/molecules/headerTop";
import InstructorEmptyCourse from "./../../../components/molecules/InstructorEmptyCourse";

export default class InstructorMain extends Component {
  state = {
    isAvaible: false,
  };
  render() {
    return (
      <>
        <Header title="Switch To Student View" link="/" />
        {this.state.isAvaible ? (
          <InstructorCourse />
        ) : (
          <InstructorEmptyCourse />
        )}
      </>
    );
  }
}
