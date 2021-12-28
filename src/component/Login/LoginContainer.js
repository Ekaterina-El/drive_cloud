import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import withRedirect from "../../hoc/withRedirect";

import {
  changeEmail,
  changePassword,
  loginUser,
} from "../../redux/loginReducer";

class LoginContainer extends Component {
  render() {
    debugger
    return <Login {...this.props} />;
  }
}

const HomeRedirectComponent = withRedirect(LoginContainer, "/", true);

export default connect(
  (state) => {
    return { ...state.login };
  },
  {
    changeEmail,
    changePassword,
    loginUser,
  }
)(HomeRedirectComponent);
