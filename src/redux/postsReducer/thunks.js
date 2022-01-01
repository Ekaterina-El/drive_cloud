import { PostAPI } from "../../api/PostAPI";

export const addPost = () => (dispatch, getState) => {
  const { selectedFiles, postTitle } = getState().files.newPost;
  const uid = getState().auth.profile.uid;

  PostAPI.addPost(postTitle, selectedFiles, uid, (err) => {
    debugger;
  });
};
