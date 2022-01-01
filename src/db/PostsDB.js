import {
  collection,
  setDoc,
  doc,
  Timestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./db";

export const addPostToDB = ({ title, files, uid, postId }) => {
  const newPostRef = doc(collection(db, `posts`), `/${postId}`);
  return setDoc(newPostRef, {
    title,
    uid,
    postId,
    createdAt: Timestamp.now().toMillis(),
  });
};

export const addPostIDToUserNote = (uid, postId) => {
  const userRef = doc(collection(db, "users"), `/${uid}`);
  updateDoc(userRef, {
    posts: arrayUnion(postId.toString()),
  });
};
