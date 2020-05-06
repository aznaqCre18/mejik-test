import React, { Component } from "react";

import Vector from "./../../../../assets/img/vector-upload.png";
export default class index extends Component {
  render() {
    return (
      <>
        <div className="upload-cover">
          <img src={Vector} alt="Upload" />
          <input type="file" class="upload" />
          <div>Upload Cover Here</div>
        </div>
      </>
    );
  }
}
