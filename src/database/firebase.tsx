import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtsEf1C1Lifeezq-oXqghuLwD-m2B5c04",
  authDomain: "easy-food-1357c.firebaseapp.com",
  projectId: "easy-food-1357c",
  storageBucket: "easy-food-1357c.appspot.com",
  messagingSenderId: "571718241629",
  appId: "1:571718241629:web:61d44d574dd0d749786cb4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
