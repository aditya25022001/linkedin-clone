import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDLmFzuy9udVHjmAnIzFWnWKFtqt7FldGw",
        authDomain: "clone-fb-dd07f.firebaseapp.com",
        projectId: "clone-fb-dd07f",
        storageBucket: "clone-fb-dd07f.appspot.com",
        messagingSenderId: "24664514765",
        appId: "1:24664514765:web:3d6fee980f713eeb700984",
        measurementId: "G-EEK7DXR6ZS"
    }
)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }