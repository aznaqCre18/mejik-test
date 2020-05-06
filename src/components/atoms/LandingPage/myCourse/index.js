import React from "react";
import { Link } from "react-router-dom";

export default function MyCourse() {
  return (
    <Link to="/myCourse">
      <div className="my-course">My Course</div>
    </Link>
  );
}
