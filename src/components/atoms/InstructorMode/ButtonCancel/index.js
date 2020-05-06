import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="cancel-btn" onClick={this.props.onClick2}>
        Cancel
      </div>
    );
  }
}
