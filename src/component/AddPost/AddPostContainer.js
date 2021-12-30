import React, { Component } from "react";
import { connect } from "react-redux";
import withRedirect from "../../hoc/withRedirect";
import AddPost from "./AddPost";

import { setSelectedFiles, changePostTitle, addPost } from "../../redux/filesReducer";

class AddPostContainer extends Component {
  render() {
    return <AddPost {...this.props} />;
  }
}

export default connect(
  (state) => ({
    uid: state.auth.profile.uid,
    selectedFiles: state.files.newPost.selectedFiles,
    postTitle: state.files.newPost.postTitle,
    isFetching: state.files.newPost.isFetching,
  }),
  {
    setSelectedFiles,
    changePostTitle,
    addPost
  }
)(withRedirect(AddPostContainer, "/login", false));
