import { addFilesToStore } from "../db/FilesDB";
import { addPostIDToUserNote, addPostToDB, getPostByIdFromDB } from "../db/PostsDB";

export const PostAPI = {
  addPost(title, files, uid, onError) {
    addFilesToStore(
      uid,
      files,
      (postId) => {
        addPostToDB({
          title,
          files,
          uid,
          postId,
        }).then((_) => {
          addPostIDToUserNote(uid, postId);
        });
      },
      onError
    );
  },

  getPostById(postId, onSuccess, onError) {
    getPostByIdFromDB(postId)
    .then(data => onSuccess(data))
    .catch(err => onError(err.message))
  }
};
