import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { Redirect } from "react-router-dom";

export class LoginContainer extends Component {
  render() {
    return this.props.isAuthed ? <Redirect to={"/"} /> : <Login />;
  }
}

export default connect(
  (state) => ({
    isAuthed: state.auth.uid != null,
  }),
  {}
)(LoginContainer);
