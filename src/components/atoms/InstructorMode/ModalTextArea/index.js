import React, { Component } from "react";

export default class ModalPopUp extends Component {
  render() {
    return (
      <>
        <textarea
          className="modal-input-area"
          placeholder="Briefly describe this course ..."
        ></textarea>
      </>
    );
  }
}
