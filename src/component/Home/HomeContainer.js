import React from "react";
import { connect } from "react-redux";
import withRedirect from "../../hoc/withRedirect";
import Home from "./Home";

class HomeContainer extends React.Component {
  render() {
    return <Home {...this.props} />;
  }
}

export default connect((state) => ({
  uid: state.auth.profile.uid,
  email: state.auth.profile.email,
  name: state.auth.profile.name,
}), {})(
    withRedirect(HomeContainer, "/login", false)
);
