import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import {db, auth} from './db'

export const addUser = async (userProfile, uid) => {
  const newUserRef = doc(collection(db, "users"), `/${uid}`);
  const updatedProfile = {
    ...userProfile,
    uid,
  };

  return setDoc(newUserRef, updatedProfile).then((_) => {
    return updatedProfile;
  });
};

export function signUp(userProfile, password) {
  return createUserWithEmailAndPassword(auth, userProfile.email, password)
    .then((userCred) => {
      const user = userCred.user;
      return addUser(userProfile, user.uid);
    })
    .catch((err) => {
    //   const errCode = err.code;
    //   const errMessage = err.message;
      debugger;
    });
}

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).then((userCred) => {
    return getUserByUid(userCred.user.uid);
  });
};

export const getUserByUid = (uid) => {
  const ref = doc(db, `users/${uid}`);
  return getDoc(ref)
    .then((snapshot) => {
      const data = snapshot.data();
      return data;
    })
    .catch((error) => {
      return error;
    });
};
