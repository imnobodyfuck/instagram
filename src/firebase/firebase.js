import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLnMyXh8j8hete7YZscpZF9uwQEv9ifRE",
  authDomain: "instagram-871b5.firebaseapp.com",
  databaseURL: "https://instagram-871b5-default-rtdb.firebaseio.com",
  projectId: "instagram-871b5",
  storageBucket: "instagram-871b5.appspot.com",
  messagingSenderId: "818567849054",
  appId: "1:818567849054:web:a728bed3529c20332e80cf",
  measurementId: "G-METKZ93661",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, setDoc, doc };
