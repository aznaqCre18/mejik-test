import React from "react";
import { Link } from "react-router-dom";

export default function SwitchButton(props) {
  return (
    <Link to={props.link}>
      <div className="switch-button">{props.title}</div>
    </Link>
  );
}
