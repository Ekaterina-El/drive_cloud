import { users_files_dir } from "../utils/consts";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./db";

export const addFilesToStore = (uid, files, onSuccess, onError) => {
  const postId = Date.now();

  for (let i = 0; i < files.length; i++) {
    addFileToStore(uid, files[i], postId, onError).then((snapshot) => {
      debugger;
      if (i === files.length - 1) {
        onSuccess(postId);
      }
    });
  }
};

export const addFileToStore = (uid, file, postId, onError) => {
  const path = ref(storage, `${users_files_dir}/${uid}/${postId}/${file.name}`);
  return uploadBytes(path, file)
    .then((snapshot) => {
      return snapshot;
    })
    .catch((err) => {
      debugger;
      onError(err);
    });
};
