import React, { Component } from "react";

import CourseIns from "./../../atoms/InstructorMode/CourseIns";
import Modals from "./../../molecules/modal";

export default class InstructorCourse extends Component {
  render() {
    return (
      <>
        <div className="container-instructor">
          <div className="head">
            <div className="title-head">Created Courses</div>
            <Modals />
          </div>
          <CourseIns />
        </div>
      </>
    );
  }
}
