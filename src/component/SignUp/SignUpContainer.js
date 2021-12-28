import React, { Component } from "react";
import { connect } from "react-redux";
import withRedirect from "../../hoc/withRedirect";

import SignUp from "./SignUp";

import {
  changeName,
  changeEmail,
  changeRepPass,
  changePassword,
  signUpUser,
  clearError
} from "../../redux/signUpReducer";

class SignUpContainer extends Component {
  render() {
    debugger
    return <SignUp {...this.props}/>;
  }
}

const HomeRedirectComponent = withRedirect(SignUpContainer, "/", true);

export default connect(
  (state) => {
    return { ...state.signUp };
  },
  {
    changeName,
    changeEmail,
    changePassword,
    changeRepPass,
    signUpUser,
    clearError
  }
)(HomeRedirectComponent);
