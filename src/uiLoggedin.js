import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut , updateProfile} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"; 
  // TODO: Add SDKs for Firebase products that you want to use
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

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user);
    // ...
    document.querySelector('#loginregisterbutton').classList.add('invisible');
    let viewAcc = document.querySelector('#view-acc-button');
    viewAcc.style.display = 'block'
    viewAcc.innerHTML = "👤"+user.displayName;
    if(document.querySelector('.logoutButton')){
        let logoutButton = document.querySelector('.logoutButton');
        logoutButton.addEventListener('click', () => {
            const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            });
            setTimeout(() => {
                window.location.href = "../index.html";
            },500)
        })
        
    }
    if(document.querySelector('#infoUsername')){
        document.querySelector('#infoUsername').innerHTML += `<span style="color: black; font-size: 18px;">${user.displayName}</span>`;
        document.querySelector('#infoEmail').innerHTML += `<span style="color: black; font-size: 16px;">${user.email}</span>`;
    }
    if(document.querySelector('.homepageCard')){
        if(auth.currentUser)
        document.querySelector('.homepageCard').classList.remove('invisible');
    }
    
  } else {
    // User is signed out
    // ...
    console.log("no user");
    let viewAcc = document.querySelector('#view-acc-button');
    viewAcc.style.display = 'none';
    document.querySelector('#loginregisterbutton').classList.remove('invisible');
    document.querySelector('.getStartedNow').classList.remove('invisible');
  }
})