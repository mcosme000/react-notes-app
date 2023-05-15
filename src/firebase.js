// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh2l3nU9GeNZbmIKNTUd9gF8un5X559sc",
  authDomain: "react-wishlist-7393f.firebaseapp.com",
  projectId: "react-wishlist-7393f",
  storageBucket: "react-wishlist-7393f.appspot.com",
  messagingSenderId: "187185000034",
  appId: "1:187185000034:web:54fa030f2e434fd670eb3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const itemsCollection = collection(db, "items")
