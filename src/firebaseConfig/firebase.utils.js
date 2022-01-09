
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {  doc, getDoc,  setDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAlEDoEsKy_vIMBTIyxeqPKfDZRNpKFKe8",
    authDomain: "crwn-clothing-e2594.firebaseapp.com",
    projectId: "crwn-clothing-e2594",
    storageBucket: "crwn-clothing-e2594.appspot.com",
    messagingSenderId: "381469900870",
    appId: "1:381469900870:web:e9da2b2dd7fbe2c66d4a47",
    measurementId: "G-CDH3K1YHNY"
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogleAuth = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('Successfully sign in with Google Auth ', result);
        }).catch((error) => {
            console.log('Failed to sign in with Google Auth ', error);
        });
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // console.log('Creating user profile:', userAuth);
    const userRef = doc(db, "users", `${userAuth.uid}`);
    const userSnap = await getDoc(userRef);    
    if (!userSnap.exists()) {
        const { displayName, email } = userAuth;
        // const createdAt = new Date();
        try {
            await setDoc(userRef, {
                displayName,
                email,
                ...additionalData
            })
            console.log('Created user profile');
        }
        catch (error) {
            console.log('Error creating user profile:', error.message);
        }
    }
    return userRef;
}





export default firebaseApp;
