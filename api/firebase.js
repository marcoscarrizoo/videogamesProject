import firebase from 'firebase/app'
import 'firebase/auth'
//import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDg76NOhZtEm_ikBeOZW6tziSoQwE6bhz8",
    authDomain: "videogames-b289d.firebaseapp.com",
    projectId: "videogames-b289d",
    storageBucket: "videogames-b289d.appspot.com",
    messagingSenderId: "809924671700",
    appId: "1:809924671700:web:16092388d4fa6c81c02341",
    measurementId: "G-6TB626T428"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //iniciar sesion
  export function loginWithGoogle() {   //a esya funciom se la pasamos al reducer para que con una accion podamos hacer el logging
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
    .then(snap =>snap.user)
}

//cerrar sesion 
export function singOutGoogle() {
    firebase.auth().signOut()
    }

