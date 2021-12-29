import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7-wbEDA5HamyG6pj430iCKve5ebjLDc4",
  authDomain: "drivecloud-e33c4.firebaseapp.com",
  databaseURL: "https://drivecloud-e33c4-default-rtdb.firebaseio.com",
  projectId: "drivecloud-e33c4",
  storageBucket: "drivecloud-e33c4.appspot.com",
  messagingSenderId: "646189032390",
  appId: "1:646189032390:web:66d653cdefb8fa420f48c7",
  measurementId: "G-8XG94PCX1T",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const db = getFirestore();

export const addUser = async (userProfile, id) => {
  const newUserRef = doc(collection(db, "users"));
  const updatedProfile = {
    ...userProfile,
    id,
  };

  return setDoc(newUserRef, updatedProfile).then((_) => {
    return updatedProfile;
  });
};

export const getUsers = async () => {
  const q = await getDocs(collection(db, "users"));
  q.forEach((doc) => {
    const data = doc.data();
    debugger;
  });
};

export function signUp(userProfile, password) {
  return createUserWithEmailAndPassword(auth, userProfile.email, password)
    .then((userCred) => {
      const user = userCred.user;
      return addUser(userProfile, user.uid);
    })
    .catch((err) => {
      const errCode = err.code;
      const errMessage = err.message;
      debugger;
    });
}

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth,email, password).then(
    // Get user by id => User
    (userCred) => ({
      email,
      uid: userCred.user.uid,
    })
  );
};
