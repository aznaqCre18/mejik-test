import React, { Component, createContext } from "react";

let ContextType;
const { Provider, Consumer } = (ContextType = createContext());

class ContextProvider extends Component {
  state = {
    isLogin: false,
    token: window.localStorage.getItem("token"),
  };

  handleLogin = () => {
    const token = window.localStorage.getItem("token");
    if (token === window.localStorage.getItem("token")) {
      this.setState({
        isLogin: true,
      });
    }
    console.log(this.state.isLogin);
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          handleLogin: this.handleLogin,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ContextProvider, Consumer, ContextType };
