import { users_files_dir } from "../utils/consts";
import {
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
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

const getMetadataOfDoc = async (refDoc) => {
  return await getMetadata(refDoc).then(async (meta) => {
    const docData = {
      ref: refDoc,
      name: meta.name,
      size: meta.size,
      created: meta.timeCreated,
      updated: meta.updated,
    };
    docData.url = await getDownloadURL(refDoc);
    return docData;
  });
};

export const getFilesListOfPost = async (userId, postId) => {
  const folder = ref(storage, `${users_files_dir}/${userId}/${postId}`);

  const list = await listAll(folder)
  const data = await list.items.map(async (refDoc) => {
    const d = await getMetadataOfDoc(refDoc);
    return d;
  });

  return Promise.all(data);
};
