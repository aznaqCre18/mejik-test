import React, { Component } from "react";

import "./../../../molecules/modal/modal.scss";
import { Modal } from "react-bootstrap";
import ModalInput from "./../ModalInput";
import ModalInputArea from "./../ModalTextArea";
import UploadCover from "./../ButtonUpload";
import Cancel from "./../ButtonCancel";
import Submit from "./../ButtonSubmit";

export default class index extends Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onClick}
          id="modal"
          centered
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div className="title-new">Create New Course</div>
          <div className="title-input">Course Title</div>
          <ModalInput />
          <div className="description">Description</div>
          <ModalInputArea />
          <div className="description">Cover</div>
          <UploadCover />
          <div className="button-container">
            <Cancel onClick2={this.props.onClick} />
            <Submit />
          </div>
        </Modal>
      </>
    );
  }
}
