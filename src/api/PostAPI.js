import { addFilesToStore } from "../db/FilesDB";
import { addPostIDToUserNote, addPostToDB } from "../db/PostsDB";

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
