import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="new-course-button" onClick={this.props.onClick}>
          New Course
        </div>
      </>
    );
  }
}
