import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL9Ben3zx4tgJsxIYg-NEeKSw3sePTz2s",
  authDomain: "hackathon-d51dd.firebaseapp.com",
  projectId: "hackathon-d51dd",
  storageBucket: "hackathon-d51dd.appspot.com",
  messagingSenderId: "1084283805642",
  appId: "1:1084283805642:web:f2ebd7f0abb27ea5b2b933",
  measurementId: "G-QDYBVSF41R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const ResRef = collection(db, "Resturant");
const UserRef = collection(db, "Users");

export {
  auth,
  db,
  addDoc,
  ResRef,
  UserRef,
  createUserWithEmailAndPassword,
  getDocs,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
