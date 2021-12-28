import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withRedirect = (Component, path, authed) => {
  class MyRedirect extends React.Component {
    render() {
      debugger
      if (this.props.isAuthed === authed) return <Redirect to={path} />;
      return <Component {...this.props} />;
    }
  }

  return connect(
    (state) => ({
      isAuthed: state.auth.uid != null,
    }),
    {}
  )(MyRedirect);
};

export default withRedirect;
