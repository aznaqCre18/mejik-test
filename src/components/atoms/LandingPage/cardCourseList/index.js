import React, { Component } from "react";

// import CourseImg from "./../../../../assets/img/thumb-course.png";
import { Card } from "antd";

export default class CourseList extends Component {
  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={this.props.img} />}
        className="card-item"
        key={this.props.key}
      >
        <div className="title">{this.props.title}</div>
      </Card>
    );
  }
}
