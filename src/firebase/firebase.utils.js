import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCNlcxz6AWT3f_RVyUvrpx4zSkTSWGlyn8",
    authDomain: "clothing-e-commerce-nabilfatih.firebaseapp.com",
    projectId: "clothing-e-commerce-nabilfatih",
    storageBucket: "clothing-e-commerce-nabilfatih.appspot.com",
    messagingSenderId: "281229807518",
    appId: "1:281229807518:web:3ed5fb5d69f0be4821d08f",
    measurementId: "G-WFYVFG4FBM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;