// Get DOM elements
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const imageGallery = document.querySelector(".scrollable-images");

// Event listeners for UI interactions
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Image gallery functionality
let imageIndex = 0;

function scrollLeft() {
    if (imageIndex === 0) {
        imageIndex = imageGallery.childElementCount - 1;
    } else {
        imageIndex--;
    }
    updateImageGallery();
}

function scrollRight() {
    if (imageIndex === imageGallery.childElementCount - 1) {
        imageIndex = 0;
    } else {
        imageIndex++;
    }
    updateImageGallery();
}

function updateImageGallery() {
    const imageWidth = imageGallery.firstElementChild.clientWidth;
    const offset = imageWidth * imageIndex;
    imageGallery.style.transform = `translateX(-${offset}px)`;
}

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZhmODwsjXEsCO77hW0lC1gC2BjiwnUnE",
  authDomain: "mvd-high-shool.firebaseapp.com",
  projectId: "mvd-high-shool",
  storageBucket: "mvd-high-shool.appspot.com",
  messagingSenderId: "569086901288",
  appId: "1:569086901288:web:0eeab8d8071fe4eb84091d",
  measurementId: "G-HR82BXHH43"
};
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZhmODwsjXEsCO77hW0lC1gC2BjiwnUnE",
    authDomain: "mvd-high-shool.firebaseapp.com",
    databaseURL: "https://mvd-high-shool-default-rtdb.firebaseio.com",
    storageBucket: "mvd-high-shool.appspot.com",
    messagingSenderId: "569086901288"
  };
  firebase.initializeApp(config);
  
  // Firebase Variables
  var auth = firebase.auth();
  
  // on state changed
  auth.onAuthStateChanged(firebaseUser => {
    // check email
    if(firebaseUser){
  
      currentEmail.innerHTML = auth.currentUser.email
      currentEmail.style.display = 'block';
      singoutButton.style.display = 'block';
      singupForm.style.display = 'none';
    } else{
      singoutButton.style.display = 'none';
      singupForm.style.display = 'block';
      currentEmail.style.display = 'none';
    }
  
  });
  
  
  // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
  // signup form
  // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
  
  
  var singupForm = document.querySelector("#signup-form");
  var userName = document.querySelector("#username");
  var email = document.querySelector("#email");
  var password = document.querySelector("#password");
  var singupButton = document.querySelector("#btn");
  
  
  singupButton.addEventListener("click", clickSignupButton);
  singoutButton.addEventListener("click", clickSignoutButton);
  
  
  function clickSignupButton(){
  
    //signup firebase method
    auth.createUserWithEmailAndPassword(email.value, password.value).
    then(function(user){
      console.log(auth.currentUser.email)
  
  
    }, function(error) {
      console.log(error.message);
      // error message show that you need to enable that authentication in firebase
    });
  
  }
  
  function clickSignoutButton(){
    auth.signOut()
  }
  
  // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
  // singin form
  // •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
  var signinEmail = document.querySelector("#email");
  var signinPassword = document.querySelector("#password");
  var singinButton = document.querySelector("btn");
  
  singinButton.addEventListener("click", clickSigninButton);
  
  
  function clickSigninButton() {
  
    auth.signInWithEmailAndPassword(signinEmail.value, signinPassword.value).
    then(function(user){
      console.log(user)
    }, function(error) {
      console.log(error.message);
      // error message show that you need to enable that authentication in firebase
    });
  
  }

  
