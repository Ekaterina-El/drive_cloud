import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withRedirect = (Component, path, authed) => {
  class MyRedirect extends React.Component {
    render() {
      if (this.props.isAuthed === authed) return <Redirect to={path} />;
      return <Component {...this.props} />;
    }
  }

  return connect((state) => {
    return { isAuthed: state.auth.profile.id != null };
  }, {})(MyRedirect);
};

export default withRedirect;
