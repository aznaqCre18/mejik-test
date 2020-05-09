import React, { Component } from "react";
import { Input } from "antd";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="container-password">
          <div className="title-pass">Password</div>
          <Input.Password
            placeholder="Input your password"
            className="input-password"
            name="password"
            onChange={this.props.passOnChange}
          />
        </div>
      </>
    );
  }
}
