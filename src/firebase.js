import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQlzv9RS6BwnQttNIEdV_9RdIujwQ3DyE",
  authDomain: "miller-4cf06.firebaseapp.com",
  projectId: "miller-4cf06",
  storageBucket: "miller-4cf06.appspot.com",
  messagingSenderId: "257106544948",
  appId: "1:257106544948:web:d155bb3804aeccc26cbd61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
