import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1sYmPJZ4ZKcWBU3NrXcrZ6Z7lknDMZfA",
  authDomain: "twitter-7bcb3.firebaseapp.com",
  projectId: "twitter-7bcb3",
  storageBucket: "twitter-7bcb3.appspot.com",
  messagingSenderId: "157213486700",
  appId: "1:157213486700:web:dfb34a7c2dafbf02a47249",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
