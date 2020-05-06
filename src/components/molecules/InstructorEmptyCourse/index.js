import React, { Component } from "react";
import Button from "./../../atoms/InstructorMode/ButtonCreateYourOwn";
import Modal from "./../../atoms/InstructorMode/Modal";

export default class index extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        <div className="container-empty-course">
          <div className="title-empty-course">Your Course is Empty</div>
          <Button onClick={() => this.handleShow()} />
          <Modal show={this.state.show} onClick={() => this.handleShow()} />
        </div>
      </>
    );
  }
}
