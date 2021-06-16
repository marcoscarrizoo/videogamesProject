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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //iniciar sesion
  export function loginWithGoogle() {   
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
      .then(snap =>snap.user)
}

//cerrar sesion 
export function singOutGoogle() {
    firebase.auth().signOut()
    }

//crear usuario con mail y contras
// export function createUser() {
//   let email = $('#email').val();
//   let password =$('#password').val();

//   firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then(function(data) {
//     console.log(data)
//     getUser() //cuando se crea el usuario, ejecuta esta function
//   })
//   .catch(function(error){
//     console.log(error)
//   })
//   return false; //para que la pagina no se vuelva recarcar cuando haya error
// }

//function que detecta si existe o no existe usuario registrado
//actualmente en la plataforma o en la sesion

// export function getUser() {
//   firebase.auth().onAuthStateChanged(function(user){
//     if(user) {
//       $('#access').hide();
//       $('#logged').show()
//     } else {
//       $('#logged').hide();
//       $('#access').show()
//     }
//   })
// }