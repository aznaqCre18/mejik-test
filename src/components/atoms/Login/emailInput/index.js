import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="container-email">
          <div className="title-email">Email</div>
          <input
            placeholder="e.g. najib@gmail.com"
            className="input-email"
            name="email"
            onChange={this.props.emailOnChange}
          />
        </div>
      </>
    );
  }
}
