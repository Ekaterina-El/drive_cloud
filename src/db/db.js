import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
