import React, { Component } from "react";

import "./../../../style/MyCourse/style.scss";
import MyCourseList from "./../../../components/molecules/myCourseList";
import Header from "./../../../components/molecules/headerTop";
import HeaderBeforeLogin from "./../../../components/molecules/headerTopBeforeLogin";
import { ContextType } from "./../../../context/context";

export default class MyCourse extends Component {
  static contextType = ContextType;
  render() {
    return (
      <>
        {this.context.isLogin ? (
          <Header title="Switch To Instructor View" link="/instructor" />
        ) : (
          <HeaderBeforeLogin />
        )}
        {/* <div className="my-course-title">My Course</div> */}
        <MyCourseList />
      </>
    );
  }
}
