import React, { Component } from "react";
import { connect } from "react-redux";
import withRedirect from "../../hoc/withRedirect";

import SignUp from "./SignUp";

import {
  changeEmail,
  changeRepPass,
  changePassword,
  signUpUser,
} from "../../redux/signUpReducer";

class SignUpContainer extends Component {
  render() {
    return <SignUp {...this.props} />;
  }
}

const HomeRedirectComponent = withRedirect(SignUpContainer, "/", true);

export default connect(
  (state) => {
    return { ...state.signUp };
  },
  {
    changeEmail,
    changePassword,
    changeRepPass,
    signUpUser,
  }
)(HomeRedirectComponent);
