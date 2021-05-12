import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCP3oXdKlwTVawaQfyyHIuTLnlS_ixiR7c",
    authDomain: "ecomm-db-11e25.firebaseapp.com",
    projectId: "ecomm-db-11e25",
    storageBucket: "ecomm-db-11e25.appspot.com",
    messagingSenderId: "103511873853",
    appId: "1:103511873853:web:ed08604881390d98100d54"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('Error creating user', err.message);
        }
    } 

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;