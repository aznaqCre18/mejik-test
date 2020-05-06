import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="add-your-own" onClick={this.props.onClick}>
        Add Your Own Course Now!
      </div>
    );
  }
}
