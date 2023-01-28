import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcYAIuJwqt9VvzBOi51FPudoJ5xPPRQ6w",
  authDomain: "management-f2952.firebaseapp.com",
  projectId: "management-f2952",
  storageBucket: "management-f2952.appspot.com",
  messagingSenderId: "337361152459",
  appId: "1:337361152459:web:39b8d05d729400e03aae4e",
  measurementId: "G-6W3C3ZD9WQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
const db = getFirestore();
export default db;
