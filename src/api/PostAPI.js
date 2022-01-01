import { addFilesToStore, addPostIDToUserNote, addPostToDB } from "../db/db";

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
};
