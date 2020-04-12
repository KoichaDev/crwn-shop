import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC3WsRItnF2hjJJ-bah4Oy8L0kg2jNaBlU',
  authDomain: 'crwn-db-d0e56.firebaseapp.com',
  databaseURL: 'https://crwn-db-d0e56.firebaseio.com',
  projectId: 'crwn-db-d0e56',
  storageBucket: 'crwn-db-d0e56.appspot.com',
  messagingSenderId: '171009291485',
  appId: '1:171009291485:web:d0c7e5730610f944249734',
  measurementId: 'G-J2JGEX708D',
};

// This is going to be async, since we are calling from an API
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  /* Snapshot represents (retrievering) the data */
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      /* document.ref() is used to .set() by doing CUD (Create/Update/Delete) the data */
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log('error creating users', e.message);
    }

    return userRef;
  }
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
/* This will make sure that we will always trigger the Google popup whenever we use Google auth
   provider for authentication and sign in */
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
