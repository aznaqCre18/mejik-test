import React, { Component } from "react";
import { Checkbox } from "antd";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";

import "./../../../style/Login/style.scss";
import Logo from "./../../../assets/img/logo-vector-2th.svg";
import Email from "./../../../components/atoms/Login/emailInput";
import Password from "./../../../components/atoms/Login/passwordInput";
import ButtonLogin from "./../../../components/atoms/Login/loginButton";

const LOGIN = gql`
  mutation login($email: EmailAddress!, $password: String) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        firstName
        lastName
        email
        phoneNumber
        verify
        role
      }
    }
  }
`;

export default class index extends Component {
  state = {
    email: "",
    password: "",
  };

  emailOnChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  passOnChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = (login) => {
    login({
      variables: { email: this.state.email, password: this.state.password },
    });
  };

  // handleError = () => {
  //   return <div style={{ color: "red" }}>Invalid Email or Password</div>;
  // };

  render() {
    return (
      <Mutation mutation={LOGIN}>
        {(login, { data, loading, error }) => {
          if (data) {
            window.localStorage.setItem("token", data.login.token);
            const token = data.login.token;
            if (token === window.localStorage.getItem("token")) {
              return <Redirect to="/" />;
            }
          }
          return (
            <div className="container-login">
              <div className="logo-pict">
                <img src={Logo} alt="Logo" className="logo-second" />
              </div>
              <div className="login-title">Login</div>
              <div className="login-subtitle">
                Login and start managing your learning process!
              </div>

              <Email emailOnChange={this.emailOnChange} />

              <Password passOnChange={this.passOnChange} />

              <div className="check-forget">
                <Checkbox className="check">
                  &nbsp;&nbsp;Keep me signed in
                </Checkbox>
                <span className="forget-password">
                  Forgotten your password?
                </span>
              </div>
              {error ? (
                <div style={{ color: "red" }}>Invalid Email or Password</div>
              ) : null}

              <ButtonLogin
                onClick={() => this.handleLogin(login)}
                loading={loading}
              />
              <div className="register">
                Don't you have an account yet? <a>Register here</a>
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
