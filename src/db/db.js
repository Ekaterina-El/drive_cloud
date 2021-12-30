import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";

import {
  getStorage, ref, uploadBytes
} from "firebase/storage"
import { users_files_dir } from "../utils/consts";

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
const storage = getStorage()

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

export const getUsers = async () => {
  // const q = await getDocs(collection(db, "users"));
  // q.forEach((doc) => {
  //   const data = doc.data();
  //   debugger;
  // });
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
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCred) => {
      return getUserByUid(userCred.user.uid);
    }
  );
};

export const getUserByUid = (uid) => {
  const ref = doc(db, `users/${uid}`);
  return getDoc(ref)
    .then((snapshot) => {
      const data = snapshot.data()
      return data
    })
    .catch((error) => {
      return error
    });
};

export const addFilesToStore = (uid, files, onSuccess, onError) => {
  const postId = Date.now();

  for (let i = 0; i < files.length; i++) {
    addFileToStore(uid, files[i], postId, onError).then(snapshot => {
      debugger
      if (i === files.length - 1) {
        onSuccess(postId)
      }
      
    })
  }
}


export const addFileToStore = (uid, file, postId, onError) => {
  const path = ref(storage, `${users_files_dir}/${uid}/${postId}/${file.name}`)
  return uploadBytes(path, file).then(snapshot => {
    return snapshot
  }).catch(err => {
    debugger
    onError(err)
  })
}

export const addPostToDB = ({
  title, files, uid, postId
}) => {
  const newPostRef = doc(collection(db, `posts`), `/${postId}`);
  return setDoc(newPostRef, {
    title, uid, postId, createdAt: Timestamp.now().toMillis()
  })
}

export const addPostIDToUserNote = (uid, postId) => {
  const userRef = doc(collection(db, 'users'), `/${uid}`)
  updateDoc(userRef, {
    posts: arrayUnion(postId.toString())
  })
}
