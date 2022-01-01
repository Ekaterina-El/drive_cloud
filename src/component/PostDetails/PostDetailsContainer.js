import React, { Component } from "react";
import { connect } from "react-redux";
import PostDetais from "./PostDetails";

import { withRouter } from "react-router-dom";
import withRedirect from "../../hoc/withRedirect";
import {getPost} from '../../redux/postsReducer'

class PostDetailsContainer extends Component {
  constructor(props){
    super(props)

    this.props = props;
  }

  componentDidMount() {
    const {postId, userId} = this.props.match.params;

    this.props.getPost(postId);
  }

  render() {
  
    return (
        <PostDetais {...this.props} />
    );
  }
}

export default connect(
  (state) => ({
    postId: state.files.currentPostData.postId,
    uid: state.files.currentPostData.uid,
    title: state.files.currentPostData.title,
    createdAt: state.files.currentPostData.createdAt,
    files: state.files.currentPostData.files
  }),
  {
    getPost
  }
)(withRedirect(withRouter(PostDetailsContainer), "/login", false));
