import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_vijH0jio_W-vvT3vTj54C_mkjjEFnvI",
    authDomain: "wa-clothing-db.firebaseapp.com",
    databaseURL: "https://wa-clothing-db.firebaseio.com",
    projectId: "wa-clothing-db",
    storageBucket: "wa-clothing-db.appspot.com",
    messagingSenderId: "671639118039",
    appId: "1:671639118039:web:109715c081934cd0399092",
    measurementId: "G-FNNH2NSGYJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;