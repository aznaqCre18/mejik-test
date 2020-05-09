import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import "./App.css";
import Login from "./container/pages/login";
import LandingPage from "./container/pages/landingScreen";
import MyCourse from "./container/pages/myCourse";
import InstructorMode from "./container/pages/InstructorCourseMode";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/myCourse" component={MyCourse} />
      <Route path="/instructor" component={InstructorMode} />
    </Router>
  );
}

export default App;
