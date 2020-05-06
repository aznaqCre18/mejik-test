import React, { Component } from "react";

import "./modal.scss";
// import { Modal, Button } from "react-bootstrap";
import ButtonNew from "./../../atoms/InstructorMode/ButtonNewCourse";
import Modal from "./../../atoms/InstructorMode/Modal";
// import ModalInput from "./../../atoms/InstructorMode/ModalInput";
// import ModalInputArea from "./../../atoms/InstructorMode/ModalTextArea";
// import UploadCover from "./../../atoms/InstructorMode/ButtonUpload";
// import Cancel from "./../../atoms/InstructorMode/ButtonCancel";
// import Submit from "./../../atoms/InstructorMode/ButtonSubmit";

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
        <ButtonNew onClick={() => this.handleShow()} />
        <Modal show={this.state.show} onClick={() => this.handleShow()} />
      </>
    );
  }
}
