import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import withRedirect from "../../hoc/withRedirect";

class LoginContainer extends Component {
  render() {
    return <Login />;
  }
}

const HomeRedirectComponent = withRedirect(LoginContainer, "/", true);

export default connect(
  (state) => ({
    name: 1,
  }),
  {}
)(HomeRedirectComponent);
