import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyACABju1_QLFUXzehr5_Wr9QuXvFRiklEg",
  authDomain: "videogames-91731.firebaseapp.com",
  projectId: "videogames-91731",
  storageBucket: "videogames-91731.appspot.com",
  messagingSenderId: "373127802701",
  appId: "1:373127802701:web:bccc46be9bb2578af85104",
  measurementId: "G-RRX26EXYTB"
};

firebase.initializeApp(firebaseConfig); // Initialize Firebase
let db = firebase.firestore()  // base de datos
let auth = firebase.auth()    //auntenticacion

export {auth}
export {db}


  //iniciar sesion
  export function loginWithGoogle() {   
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
      .then(snap =>snap.user)
}

export function loginUser() {
  auth.signInWithEmailAndPassword()
  
  
}



//cerrar sesion 
export function singOutGoogle() {
    firebase.auth().signOut()  }