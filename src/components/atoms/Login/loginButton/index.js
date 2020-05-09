import React, { Component } from "react";

import { Consumer } from "./../../../../context/context";

export default class index extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="shadow-outter">
        <Consumer>
          {({ handleLogin }) => (
            <div className="login-btn" onClick={handleLogin}>
              {this.props.loading ? "Loading..." : "Login"}
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
