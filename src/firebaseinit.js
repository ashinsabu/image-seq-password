import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuZLVk6B1xG-zN_dQVOlGa5ayT5nSW2nU",
    authDomain: "image-seq-password.firebaseapp.com",
    projectId: "image-seq-password",
    storageBucket: "image-seq-password.appspot.com",
    messagingSenderId: "1012026876474",
    appId: "1:1012026876474:web:564aec9752b422cb604b03",
    measurementId: "G-CVSCK6B1PL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);