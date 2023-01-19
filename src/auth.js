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

  const db = getFirestore(app);

const signUp = async (username,email,password) => {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password).catch((err) => 
        console.log(err)
    );
    
    const user = await updateProfile(auth.currentUser,{displayName: username}).catch((err) => 
        console.log(err)
    );
    console.log(user);
    
}

const logIn = (email,password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setTimeout(() => {
            window.location.href = "../index.html";
        },500);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}



// const logOut = () => {
//     const auth = getAuth();
//     signOut(auth).then(() => {
//     // Sign-out successful.
//     }).catch((error) => {
//     // An error happened.
//     });
// }

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log(user);
//     // ...
//     document.querySelector('#loginregisterbutton').classList.add('invisible');
//   } else {
//     // User is signed out
//     // ...
//     console.log("no user");
//     document.querySelector('#loginregisterbutton').classList.remove('invisible');
//   }
// });

//utility functions
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}
// eventlisteners

document.querySelector('#registerbutton').addEventListener('click', () => {
    let email = document.querySelector('#registerEmail').value;
    let username = document.querySelector('#registerUsername').value;
    let password;
    if(document.querySelector('#textPasswordRegister').checked)
        password = document.querySelector('#registerPassword').value;
    else{
        password = registerPassword;
        // console.log(password);
        // return;
    }
    if(password.length > 2 && ValidateEmail(email)){
        signUp(username,email,password);
        document.querySelector('#registerMessage').style.color = 'green';
        document.querySelector('#registerMessage').textContent = 'Registered Successfully! Redirecting in 3 seconds';
        setTimeout(()=>{
            window. location. replace("../index.html");
        },3000)
    }
    else{
        document.querySelector('#registerMessage').style.color = 'red';
        document.querySelector('#registerMessage').textContent = 'Invalid Email/Password';
    }
})

document.querySelector('#loginbutton').addEventListener('click', () => {
    let email = document.querySelector('#loginEmail').value;
    let password;
    if(document.querySelector('#textPasswordLogin').checked)
        password = document.querySelector('#loginPassword').value;
    else{
        password = loginPassword;
        // console.log(password);
        // return;
    }
    // document.querySelector('#loginPassword').value
    logIn(email,password);

})