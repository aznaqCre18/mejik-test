import React, { Component } from "react";

import Card from "./../../../atoms/LandingPage/cardCourseList";
import Image from "./../../../../assets/img/thumb-course.png";

export default class MainContainer extends Component {
  render() {
    return (
      <>
        <div className="instructor-container">
          <Card
            title="The Complete 2020 Web Development Bootcamp"
            img={Image}
          />
          <Card
            title="Create Chatbot for Website with React and Node.js"
            img={Image}
          />
          <Card title="Modern JavaScript (from Novice to Ninja)" img={Image} />
          <Card title="The Modern GraphQL Bootcamp " img={Image} />
          <Card title="Modern JavaScript (from Novice to Ninja)" img={Image} />
          <Card title="The Modern GraphQL Bootcamp " img={Image} />
        </div>
      </>
    );
  }
}
