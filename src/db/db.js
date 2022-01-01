import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

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

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
