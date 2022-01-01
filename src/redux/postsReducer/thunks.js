import { setCurrentPostData, setCurrentPostFiles } from "./actionCreators";
import { PostAPI } from "../../api/PostAPI";

export const addPost = () => (dispatch, getState) => {
  const { selectedFiles, postTitle } = getState().files.newPost;
  const uid = getState().auth.profile.uid;

  PostAPI.addPost(postTitle, selectedFiles, uid, (err) => {
  });
};

export const getPost = (userId, postId) => (dispatch) => {
  PostAPI.getPostById(
    postId,
    (data) => {
      dispatch(setCurrentPostData(data))
      PostAPI.getPostFilesList(userId, postId).then(
        filesList => {
          debugger
          dispatch(setCurrentPostFiles(filesList))
        }
      )
    },
    (err) => alert(err)
  );
};
