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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;