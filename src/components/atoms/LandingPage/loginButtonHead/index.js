import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Link to="/login">
        <div className="btn-login-header">Login</div>
      </Link>
    </>
  );
}
