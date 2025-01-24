import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDROrIYr6s7T3XzdjB_De3qS76ar951Ka4",
  authDomain: "rapiddata-719f7.firebaseapp.com",
  databaseURL: "https://rapiddata-719f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rapiddata-719f7",
  storageBucket: "rapiddata-719f7.firebasestorage.app",
  messagingSenderId: "28316684236",
  appId: "1:28316684236:web:5dfa1c5825404b3243d769",
  measurementId: "G-BQZ2ZW7ZZM"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = initializeApp.firestore();

export default db;