// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCb-NiJgTu2UBG8EsMy2nlG-K5m4TAoJ4s",
    authDomain: "instagram-clone-react-91abd.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-91abd-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-91abd",
    storageBucket: "instagram-clone-react-91abd.appspot.com",
    messagingSenderId: "919084943361",
    appId: "1:919084943361:web:99dabb8d72d88e29389800",
    measurementId: "G-8939YCK3E2"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};
