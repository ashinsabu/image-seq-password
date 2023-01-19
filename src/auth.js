import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


const signUp = (username,email,password) => {
    const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}



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
    let password = document.querySelector('#registerPassword').value;
    if(password.length > 5 && ValidateEmail(email)){
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