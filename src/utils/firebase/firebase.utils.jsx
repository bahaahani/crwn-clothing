import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfAXybvA6UudURsN05uUdKJODKJ-bmsEk",
  authDomain: "crownshop-d0a80.firebaseapp.com",
  projectId: "crownshop-d0a80",
  storageBucket: "crownshop-d0a80.appspot.com",
  messagingSenderId: "48748251738",
  appId: "1:48748251738:web:a7d308f3eacd1eadc8e663",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const db = getFirestore(firebaseapp);

export const auth = getAuth(firebaseapp);
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log("userAuth", userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnap = await getDoc(userDocRef);
  if (!userDocSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
};
