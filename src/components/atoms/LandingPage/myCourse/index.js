import React from "react";
import { Link } from "react-router-dom";

import { Consumer } from "./../../../../context/context";

export default class MyCourse extends React.Component {
  render() {
    return (
      <Link to="/myCourse">
        <div className="my-course">My Course</div>
      </Link>
    );
  }
}
